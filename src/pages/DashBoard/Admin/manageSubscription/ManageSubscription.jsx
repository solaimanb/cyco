import React, { useEffect } from "react";
import Subscription from "../../../../components/subscription/Subscription";
import ManageSubscriptionFirst from "../../../../shared/manageSubscriptionShared/ManageSubscriptionFirst";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchItems } from "../../../../store/slices/subscriptionSlice/subscriptionSlice";
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
    <>
      <div className="min-h-screen items-center ">
        <h1 className=" text-3xl text-center m-5">
          Manage Subscription for Admin
        </h1>

        {/* 1nd number card */}
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
    </>
  );
};

export default ManageSubscription;
