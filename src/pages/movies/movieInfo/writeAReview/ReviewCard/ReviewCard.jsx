import React, { useState } from 'react';
import ContentModal from './ContentModal'; 
import useUsers from '../../../../../hooks/useUsers';


const ReviewCard = ({ review }) => {
  const [showModal, setShowModal] = useState(false);
  // const [user ] = useUsers();
  // console.log('user from Review card', user);
  console.log(review);
  

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <div className="w-96 h-72 bg-black/80 rounded-md shadow-md p-4 m-4 flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
          <img
            src={review.poster}
            alt={`Poster for ${review.title}`}
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>
        <div className="flex flex-col justify-between relative">
          <div className="h-28 overflow-hidden">
            <div
              className="text-gray-600 line-clamp-5"
              dangerouslySetInnerHTML={{ __html: review.content }}
            ></div>
          </div>
          <p className="text-sm text-sky-700 mt-2">Genre: {review.genre}</p>
          <div className="flex justify-between items-center mt-4">
           <div className='flex items-center'>
           <img
              src={review?.user?.photoURL}
              alt={`Poster for ${review.title}`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <p className="text-sm">{review?.user?.displayName}</p>
           </div>
            <button
              onClick={openModal}
              className="bg-cyred/50 hover:bg-cyred/60 px-2 rounded-lg"
            >
              <span className="text-sm">Read More</span>
            </button>
          </div>
        </div>
      </div>
      <div >
      {showModal && <ContentModal review={review} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default ReviewCard;
