import React, { useEffect, useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";

import { fetchItems, updateItemRequest } from '../../store/slices/subscriptionSlice/subscriptionSlice';
import { updateSubscription } from '../../api/updateSubscription';
import Swal from 'sweetalert2';
const ManageSubscriptionFirst = ({isOpen, onOpenChange, items}) => {
 console.log(items);
    
      const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
         
          month: items?.month,
          month_free: items?.month_free,
           save: items?.save,
          profit: items?.profit,
         
        }
      });
      // Submit your data into Redux store
      const onSubmit = data => {
        updateSubscription(data, items?._id)
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Update Successful',
            showConfirmButton: false,
            timer: 1500
          })
          
   

        
        })
        .catch(err => {
          console.log(err)
        
        })
       
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
              <ModalHeader className="flex flex-col gap-1">Manage Subscriptions</ModalHeader>
              
              <ModalBody>
              <div className="modal-box max-w-md mx-auto p-4 rounded shadow-lg text-gray-700">
    
      <div className="">
      <h2 className="text-2xl font-semibold mb-4">Subscription Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input defaultValue={items?.name} className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" {...register("name")} />
        </div>
        <div className="mb-4">
          <label htmlFor="field1" className="block text-sm font-medium text-gray-700">Month</label>
          <input defaultValue={items?.month} className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("month", { min: 1, max: 12 })} />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-sm font-medium text-gray-700">Month Free</label>
          <input defaultValue={items?.month_free} className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("month_free",)} />
        </div>
        <div className="mb-4">
          <label htmlFor="field3" className="block text-sm font-medium text-gray-700">Save</label>
          <input defaultValue={items?.save} className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("save", { min: 20, max: 70 })} />
        </div>
        <div className="mb-4">
          <label htmlFor="field4" className="block text-sm font-medium text-gray-700">Profit</label>
          <input defaultValue={items?.profit} className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300" type="number" {...register("profit", )} />
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