import React from 'react';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';

const QueryPost = ( { query } ) => {
  const {_id, description, title} = query;
  return (
    <div className="flex flex-col md:flex-row justify-between gap-2 p-2 border rounded-sm border-zinc-800">
      <div className="p-2 mt-2">
        <h3 className="text-sm font-semibold">
          {title}
        </h3>
        <p className='text-sm'>
          {description}
        </p>
        <p className="text-xs text-zinc-500">
          Posted
          <span> 20 minutes </span>
          ago by
          <span> Solo </span>
        </p>
      </div>

      <div className="flex text-center items-center gap-3">
        <div className="">
          <div className="flex justify-center">
            <MdOutlineSignalCellularAlt />
          </div>
          <div className="text-xs text-center text-zinc-400">
            <p>104</p>
            <p>votes</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <TiMessages />
          </div>
          <div className="text-xs text-center text-zinc-400">
            <p>14</p>
            <p>replays</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <FaUsersViewfinder />
          </div>
          <div className="text-xs text-center text-zinc-400">
            <p>249</p>
            <p>views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryPost;
