import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';

const PopularTv = () => {
  const location = useLocation();
  const { data } = location?.state || {};
  console.log(data);

  const PlayButton = () => {
    navigate('/PopularVideoPlayer');
  };

  return (
    <div className="">
      <h2>{data?.name}</h2>
      <div className="fixed z-20 inset-0 flex justify-center items-center backdrop-blur-2xl">
        <ReactPlayer
          url={data?.tvUrl}
          width="90%"
          height="80%"
          controls
          playing
          // style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
};

export default PopularTv;
