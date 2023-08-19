import React, { useState } from 'react';
import YouTube from 'react-youtube';

const TrailerCard = ({ movie }) => {
  const [isMovieOpen, setIsMovieOpen] = useState(false);
//   console.log(movie);

  const openMoviePlayer = () => {
    setIsMovieOpen(true);
  };

  const closeMoviePlayer = () => {
    setIsMovieOpen(false);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div
      onClick={openMoviePlayer}
      className="card w-full mt-10 mb-20 h-[200px] md:h-[250px] lg:h-[350px]"
    >
      <img
        className="w-full h-full object-cover rounded-sm hover:brightness-110"
        src={movie?.Poster}
        alt=""
      />
      <div className="p-2 text-white">
        <h2 className="text- font-semibold">{movie?.Title}</h2>
        <p className="text-sm">Will Be Release: {movie?.Year}</p>
      </div>
      {isMovieOpen && (
        <div className="fixed items-center inset-0 z-50 top-0 flex justify-center backdrop-blur-xl">
          <YouTube videoId={"Kmz5oyaIEMI&list=RD9kKvwuXP-tI&index=6"} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default TrailerCard;
