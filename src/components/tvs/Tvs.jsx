import React from 'react';

const Tvs = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-around w-[70%] my-10 mx-auto">
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src="/fox.png" className="object-center" />
        </div>
        <span>FOX</span>
      </div>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src="espn.webp" />
        </div>
        <span>ESPN</span>
      </div>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src="cnn.png" />
        </div>
        <span>CNN</span>
      </div>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src="hbo.png" />
        </div>
        <span>HBO</span>
      </div>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src="ea.webp" />
        </div>
        <span>EA</span>
      </div>
      <div className="avatar flex flex-col items-center gap-4 text-white font-bold mx-auto">
        <div className="w-24 h-2w-24 rounded-full">
          <img src="bbc-news.png" />
        </div>
        <span>BBC</span>
      </div>
    </div>
  );
};

export default Tvs;
