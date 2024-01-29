import React from 'react';
import { useNavigate } from 'react-router-dom';

const Channel = ({ data }) => {
  // console.log(data)

  const navigate = useNavigate();

  const handlePopularTVClick = () => {
    // Navigate to the "popular-tv" page with data.tvUrl as a parameter
    navigate(`/popular-tv`, { state: { data } });
  };

  return (
    <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
      <div className="w-16 md:w-20 h-16 md:h-20 rounded-full">
        <img onClick={handlePopularTVClick} src={data?.image} />
        <span className="text-xs md:text-sm">{data?.name}</span>
      </div>
    </div>
  );
};

export default Channel;
