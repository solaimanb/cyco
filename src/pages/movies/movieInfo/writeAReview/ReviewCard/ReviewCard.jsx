import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
  return (
<div className='flex'>
<div className="w-64 h-60 bg-black/40 rounded-md shadow-md p-4 m-4 transition-transform transform hover:scale-105 ">
    <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
    <div className="h-24 overflow-y-hidden">
      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: review.content }}></p>
    </div>
    <p className="text-sm text-gray-500 mt-2">Genre: {review.genre}</p>
    <div className="flex items-center mt-4">
      <img
        src={review.poster}
        alt={`Poster for ${review.title}`}
        className="w-10 h-10 rounded-full mr-2"
      />
      <p className="text-sm">{review.user.displayName}</p>
    </div>
  </div>
</div>
  );
};

export default ReviewCard;