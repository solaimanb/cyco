import React from 'react';

const DashboardHome = () => {
  return (
    <div className="relative flex flex-col md:justify-center items-center min-h-screen">
      <h1 className="text-xl font-bold pt-12">
        {' '}
        Welcome <span className="text-cyred uppercase"> CycoManiac</span>!!!!!
      </h1>
      <p className="pt-4 text-zinc-400">Explore, Navigate, and Take Charge.</p>

      <img
        src="recyco.jpg"
        alt=""
        className="absolute object-cover w-full h-full opacity-10"
      />
    </div>
  );
};

export default DashboardHome;
