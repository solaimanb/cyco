import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function ReviewModal({
  isOpen,
  setIsOpen,
  title,
  children,
  reset,
  refetch,
}) {
  function closeModal() {
    console.log('Write a review modal');
    reset();
    setIsOpen(false);
    refetch();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-20" onClose={closeModal}>
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

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="w-full max-w-md transform overflow-hidden rounded-md bg-zinc-800 border border-cyred p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-200"
              >
                {title}
              </Dialog.Title>
              {children}
            </div>
          </Transition.Child>
        </div>
      </div>
    </Dialog>

     
    </Transition>
  );
}
