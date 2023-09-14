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
  }, [dispatch, items]);
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

      <div className="mt-5">
        {items &&
          items.map((item) => (
            <div
              item={item}
              key={item?._id}
              className="modal-box max-w-md mx-auto bg-white p-4 rounded shadow-lg text-gray-700"
            >
              <Button
                onClick={() => handlePassDataBasic(item)}
                onPress={onOpen}
                className="btn btn-sm  absolute right-2 top-2"
                color="secondary"
              >
                Edit
              </Button>
              <div className="">
                <h2 className="text-2xl font-semibold mb-4">{item?.name}</h2>
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