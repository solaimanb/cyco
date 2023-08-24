import React from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";

const PopularTv = () => {
  
  const location = useLocation();
  const { data } = location.state || {};

  console.log(data);

  const PlayButton = () => {
    navigate("/PopularVideoPlayer");
  };

  return (
    <div className="">
      <h2>{data?.name}</h2>
      <div className="fixed inset-0 flex justify-center items-center backdrop-blur-2xl">
        <ReactPlayer
          url={data.tvUrl}
          width={"60%"}
          controls
        />
      </div>
    </div>
  );
};

export default PopularTv;
