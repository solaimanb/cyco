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
      <div className="lg:grid grid-cols-3 items-center gap-6 2xl:gap-12 py-10 h-full">
      <div className="w-full md:w-2/3 mx-auto lg:w-full h-full pb-12 col-span-2">
        <VideoPlayer channel={selectedChannel} />
      </div>
      <div className="w-5/6 mx-auto lg:w-full 2xl:mt-10">
        <LiveVideoList onSelectChannel={handleSelectChannel} />
      </div>
    </div>
    </Container>
  );
};

export default LiveTv;