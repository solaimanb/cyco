import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const Subscriptions = () => {
  const subscriptionPlans = [
    {
      title: 'Basic Plan',
      price: '9.99',
      features: [
        'Access to a library of 1000+ movies',
        'Stream on one device at a time',
        'Standard video quality',
        'Cancel anytime',
      ],
      buttonText: 'Subscribe Now',
    },
    {
      title: 'Standard Plan',
      price: '19.99',
      features: [
        'Access to a library of 3000+ movies and TV shows',
        'Stream on two devices simultaneously',
        'HD video quality',
        'Cancel anytime',
      ],
      buttonText: 'Subscribe Now',
    },
    {
      title: 'Premium Plan',
      price: '29.99',
      features: [
        'Access to a library of 5000+ movies and TV shows',
        'Stream on four devices simultaneously',
        'Ultra HD (4K) video quality',
        'Cancel anytime',
      ],
      buttonText: 'Subscribe Now',
    },
    {
      title: 'Family Plan',
      price: '39.99',
      features: [
        'Access to a library of 5000+ movies and TV shows',
        'Stream on four devices simultaneously',
        'Ultra HD (4K) video quality',
        'Create up to 5 user profiles',
        'Cancel anytime',
      ],
      buttonText: 'Subscribe Now',
    },
  ];

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* Subscription Header */}
      <div className="flex flex-row items-center justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 inline-block px-2 md:px-5">
          Subscription Plans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-10 md:px-5 lg:px-0 gap-3 p-5">
        {subscriptionPlans.map((plan, index) => (
          <SubscriptionCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;
