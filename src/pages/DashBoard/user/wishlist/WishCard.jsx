import React from 'react';
import { FaTrash } from 'react-icons/fa6';

const WishCard = ({ movie, onRemove }) => {
  const { Title, Year, Poster, imdbRating, Genre, Runtime } = movie || {};

  return (
    <div className="flex flex-col justify-between  mt-5  rounded-sm shadow-md p-4 car card-bod bg-zinc-800/70">
      <h3 className="text-lg font-semibold mb-2 p-1 rounded-sm">{Title}</h3>

      <div className="flex flex-col md:items-start md:flex-row gap-2 bg-zinc-900/50 p-2 rounded-sm">
        <div>
          <img
            src={Poster}
            alt={Title}
            className="w-full md:w-[250px] h-[300px] object-cover rounded-sm"
          />
        </div>

        <div className="py-5 md:py-0 text-left p-2">
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

      <div className="flex justify-between mt-4 p-1">
        <button className="bg-cyred hover:bg-cyred/80 text-white px-4 rounded-sm p-1">
          Watch Now
        </button>

        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

export default WishCard;
