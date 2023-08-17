import React from 'react';
import CommentBox from './CommentBox';
import LiveVideoList from './LiveVideoList';
import VideoPlayer from './VideoPlayer';

const LiveTv = () => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-2/3 md:pr-4">
        <VideoPlayer />
        <CommentBox />
      </div>
      <div className="md:w-1/3 mt-4 md:mt-0">
        <LiveVideoList />
      </div>
    </div>
  );
};

export default LiveTv;
