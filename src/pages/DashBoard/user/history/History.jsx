import React from "react";
import HistoryCard from "./HistoryCard";
import useMovies from "../../../../hooks/useMovies";
import useHistory from "../../../../hooks/useHistory";
import useAuth from "../../../../hooks/useAuth";

const History = () => {
  const user = useAuth();
  const [movies, refetch] = useMovies();

  const [history] = useHistory();



  // Check if localStorage is supported

  const filter = history.filter((h) => h.email === user.email);
  console.log(filter);

  return (
    <div className="min-h-screen">
      <div className="navbar bg-base-100">
        <p className="border-l-4 border-white mt-5 ml-5 inline-block px-5">
          Subscription Plans
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 xl:grid-cols-5">
        {filter &&
          filter.map((data) => <HistoryCard refetch={refetch} data={data} />)}
      </div>
      
    </div>
  );
};

export default History;
