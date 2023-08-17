import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  
  const openMovie = () => {
    navigate('/movieDetails', { state: { movie } })
  };

  

  return (
    <div
      onClick={openMovie}
      className="card w-full mt-10 mb-20 h-80 md:w-[250px]"
    >
      <img
        className="w-full h-full object-cover rounded-sm hover:brightness-110"
        src={movie?.Poster}
        alt=""
      />
      <div className="p-2 text-white">
        <h2 className="text- font-semibold">{movie?.Title}</h2>
        <p className="mt-2 text-sm">{movie?.Runtime}</p>
        <p className="text-sm">Released: {movie?.Released}</p>
      </div>
      
    </div>
  );
};

export default MovieCard;
