// VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-2">
      <iframe
        src="https://www.youtube.com/embed/embed/atnW4D6pc-w"
        title="Live Video"
        allowFullScreen
        className="w-full h-64"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
