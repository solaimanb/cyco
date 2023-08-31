import React from "react";

const WatchListCard = ({ movie, onRemove }) => {
  const {
    Title,
    Year,
    Poster,
    imdbRating,
    Genre,
    Runtime,
  } = movie || {};

  return (
    <div className="bg-white rounded-lg shadow-md p-4 card card-body">
      <div className="flex">
        <img
          src={Poster} // Use the actual movie poster URL
          alt={Title}
          className="w-[250px] h-[325px] rounded-md mr-4"
        />
        <div >
          <h3 className="text-lg font-semibold mb-2">{Title}</h3>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Year:</span> {Year}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">IMDb Rating:</span> {imdbRating}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Genre:</span> {Genre}
          </p>
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Runtime:</span> {Runtime}
          </p>
         
        </div>
        
      </div>
      <div className="flex justify-between mt-4">
            <button
              onClick={onRemove}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Remove
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-4 rounded">
              Watch Now
            </button>
          </div>
    </div>
  );
};

export default WatchListCard;
