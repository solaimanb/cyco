import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useParams } from 'react-router-dom';


const Play = () => {
  const location = useLocation();
  // console.log(location);
  const movie = location.state?.movie;
  console.log(movie);


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <ReactPlayer
          url={movie?.Trailer.Source}
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