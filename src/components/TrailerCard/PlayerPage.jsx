import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import useMovies from '../../hooks/useMovies';

const PlayerPage = () => {
  const [ movies] = useMovies();
  const { index } = useParams();
  const movie = movies[index];



  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <ReactPlayer
          url={movie.Trailer}
          controls
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default PlayerPage;
