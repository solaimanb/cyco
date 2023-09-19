import React from "react";
import useTVChannel from "../../../../../hooks/useTVChannel";

const EditChannel = () => {
  const [Channels] = useTVChannel();
  console.log(Channels);
  return <div></div>;
};

export default EditChannel;
