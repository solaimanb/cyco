import React from "react";
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
const ManageSubscription = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
    <div className="min-h-screen items-center ">
    <h1 className=" text-3xl text-center m-5">
         Don't come to this page because I am still working on this page.
    </h1>
 
      {/* 1nd number card */}
      <div className="modal-box max-w-md mx-auto bg-white p-4 rounded shadow-lg text-gray-700">
        <Button
          onPress={onOpen}
          className="btn btn-sm absolute right-2 top-2"
          color="secondary"
        >
          Edit
        </Button>
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Standard</h2>
        </div>
      </div>
      {/* 2nd number card */}
      <div className="modal-box max-w-md mx-auto bg-white p-4 rounded shadow-lg text-gray-700">
        <Button
          onPress={onOpen}
          className="btn btn-sm  absolute right-2 top-2"
          color="secondary"
        >
          Edit
        </Button>
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Most Popular</h2>
        </div>
      </div>
      {/* 3nd number card */}
      <div className="modal-box max-w-md mx-auto bg-white p-4 rounded shadow-lg text-gray-700">
        <Button
          onPress={onOpen}
          className="btn btn-sm  absolute right-2 top-2"
          color="secondary"
        >
          Edit
        </Button>
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Ulta Premium</h2>
        </div>
      </div>
      {/* 4nd number card */}
      <div className="modal-box max-w-md mx-auto bg-white p-4 rounded shadow-lg text-gray-700">
        <Button
          onPress={onOpen}
          className="btn btn-sm  absolute right-2 top-2"
          color="secondary"
        >
          Edit
        </Button>
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
        </div>
      </div>
     
    </div>
     <ManageSubscriptionFirst onOpenChange={onOpenChange} isOpen={isOpen} />
    </>
  );
};

export default ManageSubscription;
