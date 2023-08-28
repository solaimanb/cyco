import React from 'react';

const PopularVideoPlayer = () => {
  const videoId = data?.tvUrl;
  console.log(videoId);

  return (
    <div className="justify-center items-center">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${channel?.videoId}`}
        width="100%"
        height="100%"
        controls
        playing
        // style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default PopularVideoPlayer;