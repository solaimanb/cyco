import React from 'react';

import LiveVideoList from './LiveVideoList';
import VideoPlayer from './VideoPlayer';

const LiveTv = () => {
  return (
    <div className="fle flex-col items-center md:flex-row p-4">
      <div className="w-[90%] mx-auto h-[600px] md:pr-4">
        <VideoPlayer />
        {/* <CommentSection /> */}
      </div>
      <div className="mt-10">
        <LiveVideoList />
      </div>
    </div>
  );
};

export default LiveTv;
