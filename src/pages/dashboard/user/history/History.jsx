import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useHistory from "../../../../hooks/useHistory";
import useMovies from "../../../../hooks/useMovies";
import HistoryCard from "./HistoryCard";
import useTitle from '../../../../hooks/useTitle';

const History = () => {
  // title
  useTitle('History | CYCO')
  const user = useAuth();

  const [history, refetch] = useHistory();
  const [isFilteredHistory, setFilteredHistory] = useState()
  useEffect(()=>{
  const filteredHistory = history.filter((h) => h?.email == user?.user?.email);
  setFilteredHistory(filteredHistory);

  },[history, user])


  return (
    <section className=" p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* HISTORY HEADER */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          History
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-3 xl:grid-cols-5">
        {isFilteredHistory &&
          isFilteredHistory.map((data) => (
            <HistoryCard key={data?._id} refetch={refetch} data={data} />
          ))}
      </div>
    </section>
  );
};

export default History;
