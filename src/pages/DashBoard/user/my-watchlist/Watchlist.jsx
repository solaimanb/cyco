import React from 'react';
import WatchListCard from './WatchListCard';

const WatchList = () => {
  const categories = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
  ];
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Watch Movies List</a>
        </div>
        <div className="flex-none">
          <button className="btn">Clear List</button>
        </div>
      </div>
      <div>
        {categories.map((cate) => (
          <WatchListCard cate={cate.id} />
        ))}
      </div>
    </>
  );
};

export default WatchList;
