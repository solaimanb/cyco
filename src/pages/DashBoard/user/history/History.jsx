import React from 'react';
import HistoryCard from './HistoryCard';
import useMovies from '../../../../hooks/useMovies';

const History = () => {
    // const [movies] = useMovies();
    // console.log(movies);
    const id = [{id:1},{id:2},{id:3},{id:4},{id:5},]
    return (
        <div>
   <div className="navbar bg-base-100">
  <div className="flex-1">
    <h2 className="normal-case text-xl">History</h2>
  </div>
  <div className="flex-none">
    <button className="btn">
     All Remove
    </button>
  </div>
</div>
 
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:grid-cols-5'>
          {
           id && id.map(i=>
         <HistoryCard id={i.id}/>) 
           }
        </div>

            
        </div>
    );
};

export default History;