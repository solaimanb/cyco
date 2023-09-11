import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import CommentSection from '../../../../liveTv/CommentSection';

const WatchLive = () => {
  const location = useLocation();
  console.log(location.state?.party);
  const item = location.state?.party;

  return (
    <>
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Cyco Party
        </p>
        <button className='btn btn-primary bg-red-500 rounded-lg'>Share Party</button>
      </div>
      <div className="relative" style={{ paddingBottom: '66.25%' }}>
        <ReactPlayer
          url={item?.source}
          width="100%"
          height="100%"
          controls
          playing // Auto-play the video
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      <div>
        <CommentSection />
      </div>
    </>
  );
};

export default WatchLive;
