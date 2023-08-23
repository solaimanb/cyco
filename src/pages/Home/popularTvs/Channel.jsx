import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Channel = ({ data }) => {
  // console.log(data)

  const navigate = useNavigate();

  const handlePopularTVClick = () => {
    // Navigate to the "popular-tv" page with data.tvUrl as a parameter
    navigate(`/popular-tv`, { state: { data } });
  };

  return (
    <div>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img 
          onClick={handlePopularTVClick} 
          src={data?.image} />
        </div>
        <span>{data?.name}</span>
      </div>
    </div>
  );
};

export default Channel;
