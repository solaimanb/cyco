import React from "react";
import useTVChannel from "../../../../../hooks/useTVChannel";

const EditLiveChannel = () => {
  const [Channels] = useTVChannel();
  console.log(Channels);
  return <div></div>;
};

export default EditLiveChannel;
