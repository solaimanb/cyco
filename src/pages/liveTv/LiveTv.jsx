import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';
import LiveVideoList from './LiveVideoList';
import Container from '../../components/container/Container';

const LiveTv = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    setSelectedChannel(channels[0]);
  }, []);

  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
  };

  const channels = [
    { name: 'FOX', imageSrc: '/fox.png', videoId: 'Nv6b9JYiaBY&ab_channel=OuterSpace' },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center lg:flex-row p-4 gap-10 h-screen">
      <div className="w-full h-full md:w-3/4 mx-auto md:pr-4">
        <VideoPlayer channel={selectedChannel} />
      </div>
      <div className="mt-10">
        <LiveVideoList onSelectChannel={handleSelectChannel} />
      </div>
    </div>
    </Container>
  );
};

export default LiveTv;