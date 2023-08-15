import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePlaylistAdd } from "react-icons/md"; // Corrected import path

const SeriesCard = () => {
  const [datas, setData] = useState([]);
  
  useEffect(() => {
    fetch('/public/playListData.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {datas.map((data) => (
          <Link key={data.id} to="/series/seriesDetails" className="card w-96 mt-5 h-60 bg-base-100 shadow-xl image-full group cursor-pointer mx-auto">
            <figure>
              <img
                className="group-hover:scale-110 transition w-full"
                src={data.image} // Assuming the JSON data has an "image" field
                alt="Shoes"
              />
            </figure>
            <div className="card-body absolute">
              <h2 className="relative top-28 mb-2">
                {data.playlistName}
              </h2>
              <p className="text-5xl relative top-24 flex">
                <MdOutlinePlaylistAdd />
                {data.numberOfVideos}
                <small className="text-tink text-sm relative top-5">Videos</small>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeriesCard;
