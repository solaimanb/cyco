import React from 'react'
import ReactPlayer from 'react-player';



const PopularVideoPlayer = () => {



 const videoId = data?.tvUrl;
 console.log(videoId);



  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-2xl">
      <ReactPlayer
        url={
          'ihave to show data.tvUrl here'
        }
        width={'60%'}
        controls
      />
    </div>
  )
}

export default PopularVideoPlayer




//   ------------------
  
//   {videoId && <PopularVideoPlayer videoId={videoId} />}