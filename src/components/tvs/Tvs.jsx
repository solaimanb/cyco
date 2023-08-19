import React, { useEffect, useState } from 'react';
import LiveTv from './LiveTv';

const Tvs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/tvData.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-around w-[70%] my-10 mx-auto">
      {data?.map((data) => (
        <LiveTv key={data?.id} data={data} />
      ))}
    </div>
  );
};

export default Tvs;
