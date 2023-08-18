import React from "react";
import { useLoaderData } from "react-router-dom";
import YouTubePlaylist from "@codesweetly/react-youtube-playlist";
const LiveVideo = () => {
  const tvData = useLoaderData();

  return (
    <>
     
      <div>
     
 <iframe
        className="mx-auto lg:w-full w-96"
          width="660"
          height="515"
          src={tvData[0]?.tvUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      
       
      </div>
    </>
  );
};

export default LiveVideo;
