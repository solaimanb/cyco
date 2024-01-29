import React from 'react';
import usePopularTvs from '../../../hooks/usePopularTvs';
import Channel from './Channel';

const PopularTvs = () => {
  
  const [popularTvs] = usePopularTvs();

  return (
    <div className="flex flex-wrap gap-2 justify-around w-[90%] mt-10 mx-auto">
      {popularTvs?.map((data) => (
        <Channel key={data?.id} data={data} />
      ))}
    </div>
  );
};

export default PopularTvs;
