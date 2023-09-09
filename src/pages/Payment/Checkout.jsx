import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export const CheckoutForm = ({ price, selectedPlan }) => {
  const stripe = useStripe();
  console.log(stripe);
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);

  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState('');

  useEffect(() => {
    if(price > 0){
      axiosSecure.post("/create-payment-intent", { price })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    console.log(event);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
setProcessing(true)
  stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Hi Buddy",
            email: user?.email || "with no email",
          },
        },
      })
      .then(function (result) {
        // Handle result.error or result.paymentIntent
        console.log(result.error, result.paymentIntent);

        setProcessing(true)
        const paymentIntent = result.paymentIntent
        if(paymentIntent.status === "succeeded"){
          setTransectionId(paymentIntent.id)
          // const transectionId = paymentIntent.id

          // *******save payment info to the server *********

          const payment = {
            email: user?.email, 
            transectionId: paymentIntent.id,
            price,
            membership: selectedPlan,
            date: new Date(),
            status: 'pending',
            

          }
          axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
              console.log(res);

              // TODO: display confirm 

            }
          })
        }
      });
  };

  // console.log(user);

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#aab7c4",

              "::placeholder": {
                color: "#424770",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <h5 className="pt-4 text-red-700 text-sm">{cardError}</h5>}
      {transectionId && <h5 className="pt-4 text-green-700 text-sm">Transection Seccessfull</h5>}
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
      
        className="md:mt-6 rounded-sm w-full transition duration-300 border py-2 border-cyred bg-zinc-100 font-bold text-cyred"
      >
        Subscribe Now !!!
      </button>
    </form>
  );
};
