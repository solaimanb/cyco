import React, { useEffect, useState } from 'react';
import LiveVideoList from './LiveVideoList';
import VideoPlayer from './VideoPlayer';

const LiveTv = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    setSelectedChannel(channels[0]);
  }, []);

  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
  };

  const channels = [
    { name: 'FOX', imageSrc: '/fox.png', videoId: 'Jcy8kYaQwkA' },
  ];

  return (
    <div className="flex flex-col items-center lg:flex-row p-4 gap-10">
      <div className="w-full md:w-3/4 mx-auto md:pr-4">
        <VideoPlayer channel={selectedChannel} />
      </div>
      <div className="mt-10">
        <LiveVideoList onSelectChannel={handleSelectChannel} />
      </div>
    </div>
  );
};

export default LiveTv;