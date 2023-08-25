import React, { useState, useEffect } from 'react';
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
    { name: 'intro', imageSrc: '/fox.png', videoId: 'dhh2aIucDSE' },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row p-4 gap-10">
      <div className="w-full md:w-2/3 mx-auto md:pr-4"> {/* Adjust width here */}
        <VideoPlayer channel={selectedChannel} />
      </div>
      <div className="mt-10">
        <LiveVideoList onSelectChannel={handleSelectChannel} />
      </div>
    </div>
  );
};

export default LiveTv;
