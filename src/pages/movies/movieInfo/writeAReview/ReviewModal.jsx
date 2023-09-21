import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function ReviewModal({
  isOpen,
  setIsOpen,
  title,
  children,
  reset,
  refetch,
}) {
  function closeModal() {
    console.log("Write a review modal");
    reset();
    setIsOpen(false);
    refetch();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto z-50"
        onClose={closeModal}
      >
        <div className="min-h-screen flex items-center justify-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-xl">
              <Dialog.Title className="text-lg font-medium leading-6 text-white/60">
                {title}
              </Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
