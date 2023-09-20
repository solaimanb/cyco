import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningOctagonDuotone } from 'react-icons/pi';
import Swal from 'sweetalert2';
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import Modal from './Modal';

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
      const userResponseSlot = await axiosSecure.post('/query', querySlot);
      console.log(forumResponseSlot, userResponseSlot);

      refetch();
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

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      reset={reset}
      refetch={refetch}
      title={'Ask your query'}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-3">
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white" htmlFor="title">
            Title:
          </label>
          <input
            className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
            type="text"
            id="title"
            {...register('title', { required: true })}
          />
          {errors?.title && <span>Title is required</span>}
        </div>

        {/* <div className="flex flex-col gap-2">
          <label className="text-xs text-white" htmlFor="description">
            Description:
          </label>
          <textarea
            className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
            id="description"
            {...register('description', { required: true })}
          />
          {errors?.description && <span>Description is required</span>}
        </div> */}

        {/* FORUM TOPIC SELECTION */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white" htmlFor="forumTopic">
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
          {errors?.forumTopic && <span>Forum Topic is required</span>}
        </div>

        {/* QUERY SUBMISSION */}
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
              <PiWarningOctagonDuotone size={20} onClick={handleWarning} />
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AskQueryModal;
