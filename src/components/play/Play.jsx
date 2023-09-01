import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import useMovies from '../../hooks/useMovies';
import Loading from '../loading/Loading';

const Play = () => {
  const { loading }=useMovies()
  const location = useLocation();
  console.log(location);
  const { movie } = location?.state || {};
  console.log('Movie received in Play component:', movie);

  if (loading) {
    return <Loading />;
  }

  // if (!movie) {
  //   return <div>Error: Movie not found</div>;
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <ReactPlayer
          url={movie?.Trailer?.Source}
          // url={'https://www.youtube.com/watch?v=72D3MvPk3Xs'}
          controls
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default Play;
