import React from 'react';
import ReactPlayer from 'react-player';
import useMovies from '../../hooks/useMovies';
import { useParams } from 'react-router';

const PlayerPage = () => {
  const { index } = useParams();
  console.log(index);

  const [movies] = useMovies();
  console.log(movies);

  const movie = movies[index];

  if (!movie) {
    // Handle the case when the movie is not found
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ReactPlayer url={movie.Trailer.Source} controls width="80%" height="80%" />
    </div>
  );
};

export default PlayerPage;
