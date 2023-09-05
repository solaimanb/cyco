import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningOctagonDuotone } from 'react-icons/pi';
import Modal from './Modal';

const AskQueryModal = ({ isOpen, setIsOpen }) => {
  const [showWarning, setShowWarning] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setIsOpen(false);
  };

  const onCancel = (data) => {
    console.log(data);
    reset();
    setIsOpen(false);
  };

  const handleWarning = () => {
    setShowWarning(!showWarning);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Ask your query'}>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-3">
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="title">
            Title:
          </label>
          <input
            className="text-sm p-1 rounded-sm bg-zinc-700"
            type="text"
            id="title"
            {...register('title', { required: true })}
          />
          {errors?.title && <span>Title is required</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm" htmlFor="description">
            Description:
          </label>
          <textarea
            className="text-sm p-1 rounded-sm bg-zinc-700"
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
                Please fill the form to submit.
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
