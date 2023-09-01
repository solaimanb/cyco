import React from 'react';
import HistoryCard from './HistoryCard';

const History = () => {
  // const [movies] = useMovies();
  // console.log(movies);
  const id = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className="min-h-screen">
      <div className="navbar bg-base-100">
        <div className="">
          <p className="border-l-4 border-white mt-5 ml-5 inline-block px-5">
            Subscription Plans
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:grid-cols-5">
        {id && id.map((i) => <HistoryCard id={i.id} />)}
      </div>
    </div>
  );
};

export default History;