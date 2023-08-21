import { React, useEffect, useState } from 'react';
import { MdOutlinePlaylistAdd } from 'react-icons/md'; // Corrected import path
import { Link } from 'react-router-dom';
import usePlayList from '../../hooks/usePlayList';
import Loading from '../../components/loading/Loading';

const Series = () => {
    const [playList,loading] = usePlayList()

    if (loading) {
      // You can display a loading indicator here
      return <Loading />;
    }
    if (!Array.isArray(playList)) {
      return <div>Error: Movies data is not an array.</div>;
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {playList.map((item) => (
      <Link
        key={item?.id}
        to="/series/seriesParts"
        className="card w-96 mt-5 h-60 bg-base-100 shadow-xl image-full group cursor-pointer mx-auto"
      >
        <figure>
          <img
            className="group-hover:scale-110 transition w-full"
            src={item?.image}
            alt="thumbnail"
          />
        </figure>
        <div className="card-body absolute">
          <h2 className="relative top-28 mb-2">{item?.playlistName}</h2>
          <p className="text-5xl relative top-24 flex">
            <MdOutlinePlaylistAdd />
            {item?.numberOfVideos}
            <small className="text-sm relative top-5">Videos</small>
          </p>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default Series;
