import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

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

export const liveTVFetch = () => {
  const { user } = useAuth();
  const { data: tvChannel = [], refetch } = useQuery({
    queryKey: ["tvChannel", user?.email],
    queryFn: async () => {
      const data = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/liveTv?email=${user?.email}`
      );
      return data.json();
    },
  });
  return [tvChannel, refetch];
};
