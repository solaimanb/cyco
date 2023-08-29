import React from "react";

const WatchListCard = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://th.bing.com/th?id=ORMS.9a323f8a24bdcd2733f72779c5406938&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0"
          className="lg:w-1/4 xl:w-1/4 rounded-lg shadow-2xl"
        />
        <div className="w-full">
          <h1 className="text-xl font-bold">Box Office Movies!</h1>
          <p className="py-6">
            Provident In deleniti eaque aut repudiandae et a id nisi.
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
