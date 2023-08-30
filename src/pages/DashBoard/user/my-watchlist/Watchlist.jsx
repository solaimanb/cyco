import React, { useContext } from 'react';
import WatchListCard from './WatchListCard';
import { AuthContext } from '../../../../providers/AuthProvider'
import { useState } from 'react';
import { useEffect } from 'react';

const WatchList = () => {
  const { user } = useContext(AuthContext);

  const [watchlists,setWatchlist] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      fetch(`http://localhost:8080/user/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setWatchlist(data.watchlist);
          console.log(data.watchlist);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);


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
        {watchlists.map((movie,index) => (
          <WatchListCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default WatchList;
