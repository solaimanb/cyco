// LiveVideoList.js
import React from 'react';

const LiveVideoList = ({ onSelectChannel }) => {
  const channels = [
    { name: 'FOX', imageSrc: '/fox.png', videoId: 'Jcy8kYaQwkA' },
    { name: 'ESPN', imageSrc: 'espn.webp', videoId: 'WrvTFuqpA5w' },
    { name: 'CNN', imageSrc: 'cnn.png', videoId: '2VysCIAIISg' },
    { name: 'HBO', imageSrc: 'hbo.png', videoId: 'WrvTFuqpA5w' },
    { name: 'EA', imageSrc: 'ea.webp', videoId: 'uhtxFc-cpWw' },
    { name: 'BBC', imageSrc: 'bbc-news.png', videoId: 'xR7qcezLcXI' },
    { name: 'FOX', imageSrc: '/fox.png', videoId: 'WrvTFuqpA5w' },
    { name: 'ESPN', imageSrc: 'espn.webp', videoId: 'WrvTFuqpA5w' },
    { name: 'CNN', imageSrc: 'cnn.png', videoId: '2VysCIAIISg' },
    { name: 'HBO', imageSrc: 'hbo.png', videoId: 'WrvTFuqpA5w' },
    { name: 'EA', imageSrc: 'ea.webp', videoId: 'uhtxFc-cpWw' },
    { name: 'BBC', imageSrc: 'bbc-news.png', videoId: 'xR7qcezLcXI' },
  ];

  return (
    <div className="space-y-7 md:space-y-0 grid md:grid-cols-5 lg:grid-cols-5 gap-3">
    {channels?.map((channel, index) => (
      <div
        key={index}
        className="avatar space-y-3 flex flex-col items-center gap-4 text-white font-bold"
        onClick={() => onSelectChannel(channel)}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
          <img
            src={channel.imageSrc}
            className="object-cover w-full h-full"
            alt={channel.name}
          />
        </div>
        <span>{channel.name}</span>
      </div>
    ))}
  </div>
  );
};

export default LiveVideoList;
