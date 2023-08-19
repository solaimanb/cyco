// VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const movie = [];

  return (
    <div className="bg-gray-800 h-full rounded-sm p-2">
      <ReactPlayer
        url={'https://www.youtube.com/watch?v=kW5fwGkQgxk'}
        width={'100%'}
        height={'100%'}
        controls
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
