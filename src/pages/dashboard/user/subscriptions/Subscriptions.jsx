import React from 'react';
import SubscriptionCard from './SubscriptionCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../../store/slices/subscriptionSlice/subscriptionSlice';
import { useEffect } from 'react';
import useTitle from '../../../../hooks/useTitle';


const Subscriptions = () => {
  // title
  useTitle("Subcriptions | CYCO");
  const items = useSelector((state) => state.manageSubscriptions);
  console.log(items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, ]);

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* Subscription Header */}
      <div className="flex flex-row items-center justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 inline-block px-2 md:px-5">
          Subscription Plans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-10 md:px-5 lg:px-0 gap-3 p-5">
        {items.map((plan, index) => (
          <SubscriptionCard
            key={index}
            plan={plan}
          />
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;
