import React from 'react';

const WishCard = ({ movie, onRemove }) => {
  const { Title, Year, Poster, imdbRating, Genre, Runtime } = movie || {};

  return (
    <div className="bg-cyred/60 hover:bg-cyred/70  rounded-lg shadow-md p-4 card card-body ">
      <h3 className="text-lg font-semibold mb-2">{Title}</h3>
      <div className="flex justify-between gap-7">
        <div>
          <img
            src={Poster}
            alt={Title}
            className="w-[210px] h-[290px] rounded-md mr-4"
          />
        </div>

        <div className="py-16 text-left">
          <p className="text-white/70 text-sm mb-2">
            <span className="font-semibold">Year:</span> {Year}
          </p>
          <p className="text-white/70 text-sm mb-2">
            <span className="font-semibold">IMDb Rating:</span> {imdbRating}
          </p>
          <p className="text-white/70 text-sm mb-2">
            <span className="font-semibold">Genre:</span> {Genre}
          </p>
          <p className="text-white/70 text-sm mb-2">
            <span className="font-semibold">Runtime:</span> {Runtime}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={onRemove}
          className="text-red-100 hover:text-red-700 text-sm"
        >
          Remove
        </button>
        <button className="bg-cyred hover:bg-cyred/80 text-white/60 font-medium px-4 rounded">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default WishCard;
