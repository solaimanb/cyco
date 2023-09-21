import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function ReviewModal({
  isOpen,
  setIsOpen,
  title,
  children,
  reset,
}) {
  function closeModal() {
    console.log('Write a review modal');
    reset();
    setIsOpen(false);
    refetch();
    // export default function ReviewModal({ isOpen, setIsOpen, children, reset }) {
    //   function closeModal () {
    //     console.log('Write a review modal');
    //     reset();
    //     setIsOpen(false);
    //     refetch(); // Assuming refetch is defined somewhere in your component
  }


return (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-zinc-800 border border-cyred p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-200"
              >
                {title}
              </Dialog.Title>
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>

    {/* <Dialog as="div" className="fixed inset-0 " onClose={closeModal}>
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Dialog.Panel className="w-full  p-6 text-left align-middle bg-black/90 border border-sky-700 rounded-md shadow-xl transition-all">
                {children}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog> */}
  </Transition>
);
    }