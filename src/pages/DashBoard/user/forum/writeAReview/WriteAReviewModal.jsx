import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningOctagonDuotone } from 'react-icons/pi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import ReviewModal from './ReviewModal';
import useAuth from '../../../../../hooks/useAuth';



const WriteAReviewModal = ({ isOpen: isWriteaReviewOpen, setIsOpen: setIsWriteaReviewOpen }) => {
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


  const movieCategories = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  // QUERY SUBMISSION:
  const onSubmit = async (review) => {
    try {
      if (review?.categorie === 'choose a categorie') {
        Swal.fire({
          text: 'Please select a Categorie!',
          icon: 'warning',
          background: '#222',
          reverseButtons: true,
        });
        return;
      }

      // SAVE POSTING TIMESTAMP:
      const timestamp = new Date().getTime();
      review.timestamp = timestamp;
      review.views = 0;

      // QUERY SUBMISSION:
      const reviewSlot = {
        user,
        review: review,
      };

      // CLOSE MODAL:
      reset();
      setIsWriteaReviewOpen(false);
      Swal.fire({
        text: 'Thank You for Posting Review!',
        icon: 'success',
        background: '#222',
        reverseButtons: true,
      });

      // SEND Reviews TO THE SERVER:
      const reviewResponseSlot = await axiosSecure.post('/movieReviews', reviewSlot);
      const userResponseSlot = await axiosSecure.post('/reviews', reviewSlot);
      console.log(reviewResponseSlot, userResponseSlot);

      refetch();
    } catch (error) {
      console.error('Error while submitting reviews', error);
    }
  };

  // MODAL CANCEL:
  const onCancel = (data) => {
    reset();
    setIsWriteaReviewOpen(false);
  };

  // MODAL WARNING:
  const handleWarning = () => {
    setShowWarning(!showWarning);
  };

  return (
    <ReviewModal
      isOpen={isWriteaReviewOpen}
      setIsOpen={setIsWriteaReviewOpen}
      reset={reset}
      refetch={refetch}
      title={'Write a Movie Review '}
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
        {/* image Url */}
        <div className="flex flex-col gap-2">
            <label className="text-xs text-white" htmlFor="imageUrl">Image URL:</label>
            <input 
            type="text" 
            id='imageUrl' 
            placeholder='Please Pest the Movie Image Url'
            {...register('imageUrl')}
            />
           
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

        {/* MOVIE CATEGORIE SELECTION */}
        <div className="flex flex-col gap-2">
          <label className="text-xs text-white" htmlFor="movieReview">
            Choose The Categorie
          </label>
          <select
            className="text-sm p-1 rounded-sm bg-zinc-300 text-black"
            id="movieReview"
            {...register('movieCategorie', { required: true })}
          >
            <option value="select a Categorie">Select a Categorie</option>
            {movieCategories.map((categorie) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
          </select>
          {errors?.movieReview && <span>Movie categorie is required</span>}
        </div>

        {/* REVIEW SUBMISSION */}
        <div className="flex flex-row justify-between gap-2">
          
          <div className="flex flex-row items-center text-cyred">
            {showWarning && !isValid && (
              <p className="text-red-600 text-xs">
                Please fill the form to submit your review!
              </p>
            )}
            {!isValid && (
              <PiWarningOctagonDuotone size={20} onClick={handleWarning} />
            )}
          </div>

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
        </div>
      </form>
    </ReviewModal>
  );
};

export default WriteAReviewModal;
