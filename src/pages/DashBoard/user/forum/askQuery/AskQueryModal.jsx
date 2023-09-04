import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from './Modal';
const priorities = ['Low', 'Medium', 'High'];

const AskQueryModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCancel = (data) => {
    console.log(data);
    reset();
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={'Ask your query'}>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="mt-2 space-y-3"> */}
      <form onSubmit={() => handleSubmit(onSubmit)} className="mt-2 space-y-3">
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
        <div className="flex gap-2">
          <button
            type="submit"
            className="btn btn-sm rounded-sm border hover:border-green-900 hover:text-green-900 mt-2"
          >
            Submit
          </button>

          <button
            onClick={() => onCancel()}
            type="cancel"
            className="btn btn-sm rounded-sm border hover:border-cyred hover:text-cyred mt-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AskQueryModal;
