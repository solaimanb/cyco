// LiveVideoList.js
import React from 'react';

const LiveVideoList = () => {
  const channels = [
    { name: 'FOX', imageSrc: '/fox.png' },
    { name: 'ESPN', imageSrc: 'espn.webp' },
    { name: 'CNN', imageSrc: 'cnn.png' },
    { name: 'HBO', imageSrc: 'hbo.png' },
    { name: 'EA', imageSrc: 'ea.webp' },
    { name: 'BBC', imageSrc: 'bbc-news.png' },
    { name: 'FOX', imageSrc: '/fox.png' },
    { name: 'ESPN', imageSrc: 'espn.webp' },
    { name: 'CNN', imageSrc: 'cnn.png' },
    { name: 'HBO', imageSrc: 'hbo.png' },
    { name: 'EA', imageSrc: 'ea.webp' },
    { name: 'BBC', imageSrc: 'bbc-news.png' },
  ];

  return (
    <div className="space-y-7  md:justify-around w-[70%] my-10 mx-auto md:space-y-0 md:flex md:flex-wrap">
      {channels.map((channel, index) => (
        <div
          key={index}
          className="avatar space-y-3 flex flex-col items-center gap-4 text-white font-bold mx-auto"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img src={channel.imageSrc} className="object-cover w-full h-full" alt={channel.name} />
          </div>
          <span>{channel.name}</span>
        </div>
      ))}
    </div>
  );
};

export default LiveVideoList;
