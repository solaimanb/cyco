import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Table,
  TableBody,
  TableColumn,
  TableHeader
} from "@nextui-org/react";
import React from "react";
import { FaTimes } from "react-icons/fa";

const NotificationModal = ({ isOpen, onOpenChange, filters }) => {
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        classNames={{
          body: 'py-6',
          backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
          base: 'border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]',
          header: 'border-b-[1px] border-[#292f46]',
          footer: 'border-t-[1px] border-[#292f46]',
          closeButton: 'hover:bg-white/5 active:bg-white/10',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-mono text-xl">
                Notifications
              </ModalHeader>
              <ModalBody>
                {filters.map((filter) => (
                  <div className=" indicator mx-auto" filter={filter}>
                    <span className="indicator-item badge badge-secondary bg-red-500">
                      <FaTimes />
                    </span>

                    <Table
                      removeWrapper
                      aria-label="Example static collection table"
                    >
                      <TableHeader>
                        <TableColumn>payment success</TableColumn>
                        <TableColumn>{filter?.membership}</TableColumn>
                        <TableColumn>{filter?.date?.slice(0, 7)}</TableColumn>
                      </TableHeader>
                      <TableBody></TableBody>
                    </Table>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotificationModal;
