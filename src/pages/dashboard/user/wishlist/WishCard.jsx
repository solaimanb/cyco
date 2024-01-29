import React from 'react';
import { FaTrash } from 'react-icons/fa6';

const WishCard = ({ movie, onRemove }) => {
  const { Title, Year, Poster, imdbRating, Genre, Runtime } = movie || {};

  return (
    <div className="flex flex-col justify-between  mt-5  rounded-sm shadow-md p-2 car card-bod bg-zinc-800/70">
      <div className="flex flex-col md:items-start md:flex-row gap-2 bg-zinc-900/50 p-2 rounded-sm">
        <div>
          <img
            src={Poster}
            alt={Title}
            className="w-full md:w-[250px] lg:w-[300px] xl:w-[350px] h-[300px] object-cover rounded-sm"
          />
        </div>

        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-lg xl:text-2xl font-bold mb-2 p-1 rounded-sm">
              {Title}
            </h3>

            <div className="pt-5 md:py-0 text-left p-2">
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

          <div className="flex flex-row justify-end gap-5">
            <button className="bg-cyred hover:bg-cyred/80 text-white px-4 rounded-sm text-sm p-1">
              Watch Now
            </button>

            <button
              onClick={onRemove}
              className="text-red-500 hover:text-red-700 bg-zinc-800 rounded-ful py-2 px-3"
            >
              <FaTrash size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
