import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Badge,
  } from "@nextui-org/react";
  import {Card, CardBody} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/paymenthistorySlice/paymentHistorySlice";
import useAuth from "../../hooks/useAuth";
const NotificationModal = ({isOpen, onOpenChange, filters}) => {

  
  return (
    <>
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
              <ModalHeader className="flex flex-col gap-1 font-mono text-xl">
               Notifications
              </ModalHeader>
              <ModalBody>
              {
                filters.map((filter)=>
                           <div filter={filter} className="indicator">
  <span className="indicator-item badge badge-secondary bg-red-500"><FaTimes/></span> 
  
  <Card>
      <CardBody>
      <div className="flex gap-10">
      <h3 className=" text-xl ">Payments success</h3>
      <p className="badge badge-secondary badge-outline">{filter?.date.slice(0, 7)}</p>
      </div>
         
        <p className="text-base">Id: {filter?.transectionId}</p>
      </CardBody>
    </Card>
</div>
                )
              }
   
             
              </ModalBody>
              <ModalFooter>
             
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotificationModal;
