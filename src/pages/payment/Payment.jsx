import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { FaFulcrum } from 'react-icons/fa';
import { CheckoutForm } from './Checkout';
import './payment.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchItems } from '../../store/slices/subscriptionSlice/subscriptionSlice';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const dispatch = useDispatch()
  const { selectedPlan, amount } = useSelector((state) => state.payment);
  useEffect(()=>{
    dispatch(fetchItems)
  },[])
  // const price = parseFloat(amount.tofixed(2))
  console.log(selectedPlan, amount);
  const price = amount;
   
  // Function to format the date as "MMM DD, YYYY"
  const formatDate = (date) => { 
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const currentDate = formatDate(new Date());

  return (
    <div className=" relative flex justify-center items-center min-h-screen backdrop-filter backdrop-blur-sm opacity-90 ">
      <div className="absolute top-20 animate-pulse">
        <FaFulcrum className="text-4xl text-cyred" />
        <div>
          <h3>
            Onetime Subscription{' '}
            <span className="text-cyred text-xl md:text-3xl">Lifetime</span>{' '}
            Achievements
          </h3>
        </div>
      </div>
      <div className="absolute bottom-20 ">
        <div>
          <h3>
            <span className="text-cyred text-xl md:text-3xl animate-pulse">
              Subscribe
            </span>{' '}
            & Get Free Access of{' '}
            <span className="text-cyred text-xl md:text-3xl">VIP</span> club{' '}
          </h3>
        </div>
        <div className="flex justify-end ">
          <div></div>
          <FaFulcrum className="text-4xl text-cyred " />
        </div>
      </div>
      <div id="borderAnimation">
        <div className="z-20">
          <div>
            <p className="-mt-16 mb-16">Pay Amount {price}</p>
            <h2 className="text-2xl font-semibold text-cyred mb-6 md:mb-12 -rotate-1">
              Payment Essentials
            </h2>
          </div>

          {/* <form className=""> */}
          {/* <div className="mb-4">
              <label className=" block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                className="mt-1 p-2 w-full border border-cyred focus:border-none focus:outline-none focus:ring-2 focus:ring-cyred text-cyred"
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-4 md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border border-cyred focus:border-none focus:outline-none focus:ring-2 focus:ring-cyred text-cyred"
                />
              </div>
              <div className="mb-4 md:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 w-full border border-cyred focus:border-none focus:outline-none focus:ring-2 focus:ring-cyred text-cyred"
                />
              </div>
            </div> */}

          <Elements stripe={stripePromise}>
            <CheckoutForm price={price} selectedPlan={selectedPlan}/>
          </Elements>

          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
