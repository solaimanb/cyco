import React from 'react';

const DashboardHome = () => {
    return (
        <div className='flex flex-col md:justify-center items-center min-h-screen'>
          <h1 className='text-xl font-bold pt-12'> Hey  <span className='text-cyred'> CycoManiacs</span>!!!!!</h1>
          <p className='pt-4 text-zinc-400'> Welcome to the Dashboard</p>
          
        <img src="dashboard-img.png" alt="" className='w-[60vw]' />
        </div>
    );
};

export default DashboardHome;