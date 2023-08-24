import React from 'react';

const PopularVideoPlayer = () => {
  const videoId = data?.tvUrl;
  console.log(videoId);

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-2xl">
      <ReactPlayer
        url={'ihave to show data.tvUrl here'}
        width={'90%'}
        controls
      />

    </div>
  );
};

export default PopularVideoPlayer;

//   ------------------

//   {videoId && <PopularVideoPlayer videoId={videoId} />}
