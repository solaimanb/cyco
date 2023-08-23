import React from 'react';
import { Link } from 'react-router-dom';

const Channel = ({ data }) => {
  return (
    <Link to={`/popular-tv`}>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-16 md:w-20 h-16 md:h-20 rounded-full">
          <img src={data?.image} />
        </div>
        <span className='text-xs md:text-sm'>{data?.name}</span>
      </div>
    </Link>
  );
};

export default Channel;
