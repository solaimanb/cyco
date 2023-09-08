import React from 'react';

const Help = () => {
  const faqData = [
    {
      question: 'What is the OTT platform?',
      answer:
        'Our OTT (Over-The-Top) platform is an online streaming service that delivers a wide range of video content directly to your device over the internet. You can watch movies, TV shows, documentaries, and more.',
    },
    {
      question: 'How do I sign up for the platform?',
      answer:
        "To sign up, simply visit our website and click on the 'Sign Up' button. Provide the required information such as your email, password, and other details, and you'll be ready to start streaming.",
    },
    {
      question: 'Can I watch content on multiple devices?',
      answer:
        'Yes, you can access our platform on multiple devices such as smartphones, tablets, smart TVs, and computers. Just log in with your account credentials to start streaming.',
    },
    {
      question: 'Is there a free trial period?',
      answer:
        "Yes, we offer a free trial period for new users. During this time, you can explore the platform's features and content. After the trial period, you'll be prompted to choose a subscription plan.",
    },
    {
      question: 'How do I cancel my subscription?',
      answer:
        "You can cancel your subscription at any time by logging into your account and navigating to the 'Subscription' section. Follow the instructions to cancel, and you won't be charged from the next billing cycle.",
    },
    {
      question: 'Can I download content for offline viewing?',
      answer:
        'Yes, you can download select movies and TV shows to watch offline. Look for the download icon next to the content you want to save, and enjoy your downloads without an internet connection.',
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        "We accept various payment methods, including credit and debit cards, as well as digital wallets like PayPal. You can choose the payment method that's most convenient for you.",
    },
    {
      question: 'Is my personal information safe?',
      answer:
        'Absolutely. We prioritize the security and privacy of your personal information. We use advanced encryption and security measures to keep your data protected.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-cente mx-auto bg-zinc-950 p-10">
      <div className=" flex-col lg:flex-row gap-5">
        <div className="mx-auto w-full">
          <h1 className="text-lg font-semibold mb-6 text-zinc-300">
            Any Query?
          </h1>
          {faqData &&
            faqData.map((faq, index) => (
              <div
                key={index}
                tabIndex={0}
                className="collapse collapse-arrow border border-base-300 "
              >
                <div className="collapse-title font-semibold text-cyred">
                  {faq.question}
                </div>
                <div className="collapse-content text-zinc-200">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-500 mb-4">
          If you can't find the answer to your question in our FAQ, please don't
          hesitate to contact our support team. We're here to help!
        </p>
        <p className="text-gray-600">Email: cybercorps.co@gmail.com</p>
        <p className="text-gray-600">Phone: +1-123-456-****</p>
      </div>
    </div>
  );
};

export default Help;
