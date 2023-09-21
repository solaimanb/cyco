// LiveVideoList.js
import React from "react";
import useTVChannel from "../../hooks/useTVChannel";

const LiveVideoList = ({ onSelectChannel }) => {
  const [Channels] = useTVChannel();

  return (
    <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-10">
      {Channels?.map((channel) => (
        <div
          key={channel._id}
          className="text-white font-bold mx-auto"
          onClick={() => onSelectChannel(channel)}
        >
          <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-full overflow-hidden mb-4">
            <img
              src={channel.logo}
              className="w-full h-full"
              alt={channel.name}
            />
          </div>
          <h5 className="text-xs 2xl:text-">{channel.channelName}</h5>
        </div>
      ))}
    </div>
  );
};

export default LiveVideoList;
