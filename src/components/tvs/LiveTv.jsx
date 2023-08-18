import React from 'react';
import { Link, } from 'react-router-dom';

const LiveTv = ({data}) => {
 
    return (
        <Link to={`/live-tv`}> 
         <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src={data?.image} />
        </div>
        <span>{data?.name}</span>
      </div>
        </Link>
    );
};

export default LiveTv;