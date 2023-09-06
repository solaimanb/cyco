import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningOctagonDuotone } from 'react-icons/pi';
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import Modal from './Modal';

const AskQueryModal = ({ isOpen, setIsOpen }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    refetch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  // Query submission:
  const onSubmit = async (query) => {
    const querySlot = {
      user,
      query,
    };
    console.log(querySlot);

    try {
      const forumResponseSlot = await axiosSecure.post('/forumQueries', query);
      const userResponseSlot = await axiosSecure.post('/query', querySlot);

      console.log(userResponseSlot, forumResponseSlot);
      reset();

      setIsOpen(false);
    } catch (error) {
      console.error('Error while submitting query', error);
    }
  };

  // Modal dialog cancel:
  const onCancel = (data) => {
    console.log(data);
    reset();
    setIsOpen(false);
  };

  // Modal warning tips:
  const handleWarning = () => {
    setShowWarning(!showWarning);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Ask your query'}>
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
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white" htmlFor="description">
            Description:
          </label>
          <textarea
            className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
            id="description"
            {...register('description', { required: true })}
          />
          {errors?.description && <span>Description is required</span>}
        </div>

        {/* Submit Btn */}
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-row gap-2">
            <button
              type="submit"
              className="btn btn-sm rounded-sm border hover:border-green-900 hover:text-green-900 mt-2"
              disabled={!isValid}
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
