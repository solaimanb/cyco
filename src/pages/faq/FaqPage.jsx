import React from "react";

const FaqPage = () => {
    const faqData = [
        {
          question: "What is the OTT platform?",
          answer: "Our OTT (Over-The-Top) platform is an online streaming service that delivers a wide range of video content directly to your device over the internet. You can watch movies, TV shows, documentaries, and more."
        },
        {
          question: "How do I sign up for the platform?",
          answer: "To sign up, simply visit our website and click on the 'Sign Up' button. Provide the required information such as your email, password, and other details, and you'll be ready to start streaming."
        },
        {
          question: "Can I watch content on multiple devices?",
          answer: "Yes, you can access our platform on multiple devices such as smartphones, tablets, smart TVs, and computers. Just log in with your account credentials to start streaming."
        },
        {
          question: "Is there a free trial period?",
          answer: "Yes, we offer a free trial period for new users. During this time, you can explore the platform's features and content. After the trial period, you'll be prompted to choose a subscription plan."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "You can cancel your subscription at any time by logging into your account and navigating to the 'Subscription' section. Follow the instructions to cancel, and you won't be charged from the next billing cycle."
        },
        {
          question: "Can I download content for offline viewing?",
          answer: "Yes, you can download select movies and TV shows to watch offline. Look for the download icon next to the content you want to save, and enjoy your downloads without an internet connection."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We accept various payment methods, including credit and debit cards, as well as digital wallets like PayPal. You can choose the payment method that's most convenient for you."
        },
        {
          question: "Is my personal information safe?",
          answer: "Absolutely. We prioritize the security and privacy of your personal information. We use advanced encryption and security measures to keep your data protected."
        }
        // Add more FAQ items as needed
      ];
      
      

  return (
     
      <div className="hero min-h-screen bg-white">
      
        <div className="hero-content flex-col lg:flex-row gap-5">
          <img
            src="https://media.istockphoto.com/id/1253588986/vector/tiny-people-sitting-and-standing-near-giant-faq.jpg?s=612x612&w=0&k=20&c=K7I97Asm3qcbT1iXyMkQk-R_4fAvLUit8-PCxQm5sXg="
            className="lg:w-1/3 w-full"
          />
          <div className="lg:w-2/3 w-full ">
           <h1 className="text-3xl font-semibold mb-6 text-black">
          Frequently Asked Questions 
        </h1>
        { faqData&& faqData.map((faq, index)=>
        <div key={index}
            tabIndex={0}
            className=" bg-white collapse collapse-arrow border border-base-300 "
        >
            <div className="collapse-title text-xl font-medium text-blue-600">
            {faq.question}
            </div>
            <div className="collapse-content text-orange-600">
            <p>
            {faq.answer}
            </p>
            </div>
        </div>
        )}
          </div>
        </div>
      </div>
  
  );
};

export default FaqPage;

{
  /* <div className="bg-gray-100 min-h-screen py-8">
<div className="max-w-3xl mx-auto px-4">
  
  <div className="space-y-6">
    {faqData.map((faq, index) => (
      <div key={index} className="bg-white rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-medium mb-2">{faq.question}</h2>
        <p className="text-gray-700">{faq.answer}</p>
      </div>
    ))}
  </div>
</div>
</div> */
}
