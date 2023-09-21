import { Button, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ManageSubscriptionFirst from '../../../../shared/manageSubscriptionShared/ManageSubscriptionFirst';
import { fetchItems } from '../../../../store/slices/subscriptionSlice/subscriptionSlice';

const ManageSubscription = () => {
  const items = useSelector((state) => state.manageSubscriptions);
  const [isDataBasic, setIsDataBasic] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handlePassDataBasic = (id) => {
    setIsDataBasic(id);
  };

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* MANAGE SUBSCRIPTION HEADER */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Manage Subscription
        </p>
      </div>

      <div className="gap-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:grid-cols-2">
        {items &&
          items.map((item) => (
            <div
              item={item}
              key={item?._id}
              className=" bg-white p-4 rounded shadow-lg text-gray-700 "
            >
            <div className="card-actions justify-end">
        <Button
              

                onClick={() => handlePassDataBasic(item)}
                onPress={onOpen}
                className="btn btn-sm absolute "
                color="secondary"
              >
                Edit
              </Button>
    </div>
           
              <div className=" text-center">
                <h2 className="text-2xl font-semibold mb-2">{item?.title}</h2>
                <h2 className="">Price: {item?.price}</h2>
                <div className="divider">Top Features</div>
                 <div className=' text-start'>
                 <h2 className="">#- {item?.feature1}</h2>
                 <h2 className="">#- {item?.feature2}</h2>
                 </div>
            
                
              </div>
            </div>
          ))}
      </div>

      <ManageSubscriptionFirst
        items={isDataBasic}
        onOpenChange={onOpenChange}
        isOpen={isOpen}
      />
    </section>
  );
};

export default ManageSubscription;