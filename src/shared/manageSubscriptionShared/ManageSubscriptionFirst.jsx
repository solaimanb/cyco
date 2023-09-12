import React, { useEffect, useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { fetchItems, updateItemRequest } from '../../store/slices/subscriptionSlice/subscriptionSlice';
const ManageSubscriptionFirst = ({isOpen,onOpenChange,passData}) => {
 console.log(passData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleUpdateItem = (itemId, updatedItem) => {
  
  };
    const n = 20;
    const [formData, setFormData] = useState({
        field1:n ,
        field2: 0,
        field3: 0,
        field4: 0,
        name: passData?.name,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
        }
      });
      // Submit your data into Redux store
      const onSubmit = data => {
        // dispatch(updateItemRequest(itemId, updatedItem));
        console.log('Form data submitted:',data);
      }
    return (
       
           
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="2xl"
        classNames={{
          body: "py-6",
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
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              
              <ModalBody>
              <div className="modal-box max-w-md mx-auto p-4 rounded shadow-lg text-gray-700">
    
      <div className="">
      <h2 className="text-2xl font-semibold mb-4">My Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input defaultValue={passData?.name} className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" {...register("name")} />
        </div>
        <div className="mb-4">
          <label htmlFor="field1" className="block text-sm font-medium text-gray-700">Field 1:</label>
          <input  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("month", { min: 1, max: 12 })} />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-sm font-medium text-gray-700">Field 2:</label>
          <input  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("month_free",)} />
        </div>
        <div className="mb-4">
          <label htmlFor="field3" className="block text-sm font-medium text-gray-700">Field 3:</label>
          <input  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("save", { min: 20, max: 70 })} />
        </div>
        <div className="mb-4">
          <label htmlFor="field4" className="block text-sm font-medium text-gray-700">Field 4:</label>
          <input  className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("profit", )} />
        </div>
        <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <input className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" type="submit" />
               
              </ModalFooter>
      </form>
    </div>
  </div>
              
             
           </ModalBody> </>
          )}
        </ModalContent>
      </Modal>
    
    );
};

export default ManageSubscriptionFirst;