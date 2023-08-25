// VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const movie = [];

  return (
    <div className="h-full rounded-sm">
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=VNvU37jqiWM'}
        width={'100%'}
        height={'100%'}
        controls
      />
    </div>
  );
};

export default VideoPlayer;
