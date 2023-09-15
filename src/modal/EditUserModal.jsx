import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { updateData } from "../store/slices/editUserSlice/editUserSlice";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";

const EditUserModal = ({ closeModal, isOpen }) => {
  const {user} = useAuth()
  const [isData, setIsData] = useState()
  console.log(isData);
  const { register, handleSubmit, control } = useForm({
    defaultValues: {},
  });
  const dispatch = useDispatch();
  // Submit your data into Redux store
  const handleUpdateData = (email, data) => {
    console.log(email,'hh', data);
    dispatch(updateData({email, data}));
  };
  const onSubmit = (data) => {
    setIsData(data)
    console.log(data);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Profile
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        User Name:
                      </label>
                      <input
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        {...register("username")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        disabled
                        defaultValue={""}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="email"
                        {...register("email")}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        defaultValue={""}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="number"
                        {...register("phoneNumber")}
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="photo">Upload Photo:</label>
                      <Controller
                        name="photo"
                        control={control}
                        render={({ field }) => (
                          <input
                            className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                            type="file"
                            id="photo"
                            {...field}
                            accept="image/*" // Specify accepted file types (images in this case)
                          />
                        )}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        defaultValue={""}
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register("address")}
                      />
                    </div>
                    <hr className="mt-8 " />
                    <div className="flex mt-2 justify-around">
                      <input
                      onClick={()=>handleUpdateData(user?.email, isData)}
                        type="Submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      />

                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditUserModal;
