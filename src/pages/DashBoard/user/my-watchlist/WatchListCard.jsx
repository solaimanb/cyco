import React from "react";

const WatchListCard = (movie) => {
  console.log(movie);
  const {Poster,Title,PlotSummary} = movie.movie;
  console.log(Poster);
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={Poster}
          className="h-[300px]  rounded-lg shadow-2xl"
        />
        <div className="w-full">
          <h1 className="text-xl font-bold">{Title}</h1>
          <p className="py-6">
            {PlotSummary.Summary}
          </p>
          <button className="btn btn-primary">Watch Now</button>
        </div>
        <div className="flex justify-end">
            <button className="btn">Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
