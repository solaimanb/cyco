import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningOctagonDuotone } from 'react-icons/pi';
import Swal from 'sweetalert2';
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const forumTopics = [
  'Upcoming Releases',
  'Movie Reviews',
  'Classic Films',
  'Recommendations',
  'Film Trivia',
  'Cinematic Trends',
  'Film Awards',
  'Soundtracks',
  'Movie Collectibles',
  "Director's Corner",
  'Behind-the-Scenes',
  'Movie Quotes',
  'Movie News',
  'Film Festivals',
  'Cinematic Technology',
  'Challenges and Games',
  'Remakes vs. Originals',
];

const AskQueryModal = ({ isOpen, setIsOpen }) => {
  // STATE:
  const [showWarning, setShowWarning] = useState(false);

  // HOOKS:
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  // REACT HOOK FROM:
  const {
    register,
    handleSubmit,
    reset,
    refetch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  // QUERY SUBMISSION:
  const onSubmit = async (query) => {
    try {
      if (query?.forumTopic === 'select a topic') {
        Swal.fire({
          text: 'Please select a topic!',
          icon: 'warning',
          background: '#222',
          reverseButtons: true,
        });
        return;
      }

      // SAVE POSTING TIMESTAMP:
      const timestamp = new Date().getTime();
      query.timestamp = timestamp;
      query.views = 0;

      // QUERY SUBMISSION:
      const querySlot = {
        user,
        query,
      };

      // CLOSE MODAL:
      reset();
      setIsOpen(false);
      Swal.fire({
        text: 'Query submitted successfully!',
        icon: 'success',
        background: '#222',
        reverseButtons: true,
      });

      // SEND QUERY TO THE SERVER:
      const forumResponseSlot = await axiosSecure.post('/forumQueries', query);

      console.log(forumResponseSlot.data);

      // dispatch(addQuery(forumResponseSlot))

      // const userResponseSlot = await axiosSecure.post( '/query', querySlot );
    } catch (error) {
      console.error('Error while submitting query', error);
    }
  };

  // MODAL CANCEL:
  const onCancel = (data) => {
    reset();
    setIsOpen(false);
  };

  // MODAL WARNING:
  const handleWarning = () => {
    setShowWarning(!showWarning);
  };
  // <Modal
  //     backdrop="opaque"
  //     isOpen={isOpen}
  //     onOpenChange={onOpenChange}
  //     radius="2xl"
  //     classNames={{
  //       body: "",
  //       backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
  //       base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
  //       header: "border-b-[1px] border-[#292f46]",
  //       footer: "border-t-[1px] border-[#292f46]",
  //       closeButton: "hover:bg-white/5 active:bg-white/10",
  //     }}
  //   ></Modal>

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      backdrop="opaque"
      classNames={{
        body: '',
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
            <ModalHeader className="flex flex-col gap-1">
              Manage Subscriptions
            </ModalHeader>

            <ModalBody>
              <div className="modal-box w-full mx-auto p-4 rounded shadow-lg">
                <div className="">
                  <h2 className="text-2xl font-semibold mb-4">
                    Subscription Form
                  </h2>
                  {/* <form className="grid" onSubmit={handleSubmit(onSubmit)}></form>
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
                          {...register('title')}
                        >
                          <option value="Basic Plan">Basic Plan</option>
                          <option value="Standard">Standard</option>
                          <option value="Premium">Premium</option>
                          <option value="Ulta Premium">Ulta Premium</option>
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
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          type="number"
                          {...register('price')}
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
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          type="number"
                          {...register('save_price')}
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
                          className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                          type="number"
                          {...register('previous_pay')}
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
                          {...register('months_free')}
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

                  
                    <div className="mb-4">
                      <label
                        htmlFor="feature1"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Feature-1
                      </label>
                      <input
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register('feature1')}
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
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register('feature2')}
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
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register('feature3')}
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
                        className="mt-1 p-2 w-full text-white border rounded focus:outline-none focus:ring focus:border-blue-300"
                        type="text"
                        {...register('feature4')}
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
                  </form> */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-2 space-y-3"
                  >
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-xs text-white"
                        htmlFor="title"
                      ></label>
                      <input
                        className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
                        type="text"
                        id="title"
                        {...register('title', { required: true })}
                      />
                      {errors?.title && <span>Title is required</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        className="text-xs text-white"
                        htmlFor="forumTopic"
                      >
                        Forum Topic:
                      </label>
                      <select
                        className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
                        id="forumTopic"
                        {...register('forumTopic', { required: true })}
                      >
                        <option value="select a topic">Select a topic</option>
                        {forumTopics.map((topic) => (
                          <option key={topic} value={topic}>
                            {topic}
                          </option>
                        ))}
                      </select>
                      {errors?.forumTopic && (
                        <span>Forum Topic is required</span>
                      )}
                    </div>
                    <div className="flex flex-row justify-between gap-2">
                      <div className="flex flex-row gap-2">
                        <button
                          type="submit"
                          className="btn btn-sm rounded-sm border hover:border-green-900 hover:text-green-900 mt-2"
                          disabled={!isValid}
                          // onClick={() => setIsOpen(false)}
                        >
                          Submit
                        </button>

                        <button
                          onClick={() => onCancel()}
                          type="button"
                          className="btn btn-sm rounded-sm border hover:border-cyred hover:text-cyred mt-2"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="flex flex-row items-center text-cyred">
                        {showWarning && !isValid && (
                          <p className="text-red-600 text-xs">
                            Please fill the form to submit your query!
                          </p>
                        )}
                        {!isValid && (
                          <PiWarningOctagonDuotone
                            size={20}
                            onClick={handleWarning}
                          />
                        )}
                      </div>
                    </div>
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

export default AskQueryModal;

// <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-3">
//   <div className="flex flex-col gap-2">
//     <label className="text-xs text-white" htmlFor="title">
//       Title:
//     </label>
//     <input
//       className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
//       type="text"
//       id="title"
//       {...register('title', { required: true })}
//     />
//     {errors?.title && <span>Title is required</span>}
//   </div>

//   <div className="flex flex-col gap-2">
//     <label className="text-xs text-white" htmlFor="description">
//       Description:
//     </label>
//     <textarea
//       className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
//       id="description"
//       {...register('description', { required: true })}
//     />
//     {errors?.description && <span>Description is required</span>}
//   </div>

//   <div className="flex flex-col gap-2">
//     <label className="text-xs text-white" htmlFor="forumTopic">
//       Forum Topic:
//     </label>
//     <select
//       className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
//       id="forumTopic"
//       {...register('forumTopic', { required: true })}
//     >
//       <option value="select a topic">Select a topic</option>
//       {forumTopics.map((topic) => (
//         <option key={topic} value={topic}>
//           {topic}
//         </option>
//       ))}
//     </select>
//     {errors?.forumTopic && <span>Forum Topic is required</span>}
//   </div>

//   <div className="flex flex-row justify-between gap-2">
//     <div className="flex flex-row gap-2">
//       <button
//         type="submit"
//         className="btn btn-sm rounded-sm border hover:border-green-900 hover:text-green-900 mt-2"
//         disabled={!isValid}
//         // onClick={() => setIsOpen(false)}
//       >
//         Submit
//       </button>

//       <button
//         onClick={() => onCancel()}
//         type="button"
//         className="btn btn-sm rounded-sm border hover:border-cyred hover:text-cyred mt-2"
//       >
//         Cancel
//       </button>
//     </div>

//     <div className="flex flex-row items-center text-cyred">
//       {showWarning && !isValid && (
//         <p className="text-red-600 text-xs">
//           Please fill the form to submit your query!
//         </p>
//       )}
//       {!isValid && (
//         <PiWarningOctagonDuotone size={20} onClick={handleWarning} />
//       )}
//     </div>
//   </div>
// </form>
