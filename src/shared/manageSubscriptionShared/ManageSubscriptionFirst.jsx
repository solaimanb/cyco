import React, { useState } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
const ManageSubscriptionFirst = ({isOpen,onOpenChange}) => {
    const n = 20;
    const [formData, setFormData] = useState({
        field1: n,
        field2: 0,
        field3: 0,
        field4: 0,
        name: 'bb',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any action with the form data here, such as submitting it to a server.
        console.log('Form data submitted:', formData);
      };
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
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border text-white rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field1" className="block text-sm font-medium text-gray-700">Field 1:</label>
          <input
            type="number"
            id="field1"
            name="field1"
            value={formData.field1}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field2" className="block text-sm font-medium text-gray-700">Field 2:</label>
          <input
            type="number"
            id="field2"
            name="field2"
            value={formData.field2}
            onChange={handleInputChange}
            className="mt-1 p-2 text-white w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field3" className="block text-sm font-medium text-gray-700">Field 3:</label>
          <input
            type="number"
            id="field3"
            name="field3"
            value={formData.field3}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="field4" className="block text-sm font-medium text-gray-700">Field 4:</label>
          <input
            type="number"
            id="field4"
            name="field4"
            value={formData.field4}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button type="submit" className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  Submit
                </Button>
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