import { useEffect, useState } from "react";

const useTVChannel = () => {
  const [Channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/liveTv")
      .then((res) => res.json())
      .then((data) => {
        setChannels(data);
        setLoading(false);
      });
  }, []);
  return [Channels, loading];
};

export default useTVChannel;
