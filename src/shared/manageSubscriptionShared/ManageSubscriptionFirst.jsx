import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { useForm } from "react-hook-form";

import { updateSubscription } from "../../api/updateSubscription";
import Swal from "sweetalert2";

const ManageSubscriptionFirst = ({ isOpen, onOpenChange, items }) => {
  const { register, handleSubmit, setValue } = useForm({});

  // Submit your data into Redux store
  const onSubmit = (data) => {
    updateSubscription(data, items?._id)
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Update Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="2xl"
      classNames={{
        body: "",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Manage Subscriptions
            </ModalHeader>

            <ModalBody>
              <div className="modal-box w-full mx-auto p-4 rounded shadow-lg">
                <div className="">
                  <h2 className="text-2xl font-semibold mb-4">
                    Subscription Form
                  </h2>
                  <form className="grid" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-2">
                      <div className="mb-4">
                        <label
                          htmlFor="title"
                          className=" text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <select
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          {...register("title")}
                        >
                          <option value="1-Months">1-Months</option>
                          <option value="6-Months">6-Months</option>
                          <option value="1-Year">1-Year</option>
                          <option value="2-Year">2-Year</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          defaultValue={items?.price}
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          type="number"
                          {...register("price")}
                        />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="mb-4">
                        <label
                          htmlFor="save_price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          save_price
                        </label>
                        <input
                          defaultValue={items?.save_price}
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          type="number"
                          {...register("save_price")}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="previous_pay"
                          className="block text-sm font-medium text-gray-700"
                        >
                          previous_pay
                        </label>
                        <input
                          defaultValue={items?.previous_pay}
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          type="number"
                          {...register("previous_pay")}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="title"
                          className=" text-sm font-medium text-gray-700"
                        >
                          Months
                        </label>
                        <select
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          {...register("months_free")}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                    </div>

                    {/* Add new input fields here */}
                    <div className="mb-4">
                      <label
                        htmlFor="feature1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Feature-1
                      </label>
                      <input
                        defaultValue={items?.feature1}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register("feature1")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="feature2"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Feature-2
                      </label>
                      <input
                        defaultValue={items?.feature2}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register("feature2")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="feature3"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Feature-3
                      </label>
                      <input
                        defaultValue={items?.feature3}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register("feature3")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="feature4"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Feature-4
                      </label>
                      <input
                        defaultValue={items?.feature4}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register("feature4")}
                      />
                    </div>
                    <ModalFooter>
                      <Button
                        color="foreground"
                        variant="light"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                      <input
                        className="bg-[#6f4ef2] btn rounded-lg shadow-lg shadow-indigo-500/20"
                        type="submit"
                      />
                    </ModalFooter>
                  </form>
                </div>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ManageSubscriptionFirst;
