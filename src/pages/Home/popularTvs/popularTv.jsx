import React from 'react';

const PopularTv = () => {
    return (
        <div className=''>
            <video
            id="my-video"
            class="video-js"
            controls
            preload="auto"
            width="90%"
            poster="MY_VIDEO_POSTER.jpg"
            data-setup="{}"
          >
            <source src="MY_VIDEO.mp4" type="video/mp4" />
            <source src="MY_VIDEO.webm" type="video/webm" />
          </video>
        </div>
    );
};

export default PopularTv;