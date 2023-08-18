import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer = () => {
  // Task: if we add all movie Link with Json file then we can show dynamic
  // That's static video player

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-2xl">
      <ReactPlayer
        url={
          ''
        }
        width={'60%'}
        controls
      />
    </div>
  );
};

export default VideoPlayer;
