import React from 'react'

const AdminHome = () => {
  return (
    <div className=''>
      <div className='bg-[#27215E] rounded-lg mx-2'>
        <div className='my-5 mx-3 grid grid-cols-1 md:grid-cols-3 '>
          <div className="card w-96 my-3 bg-[#130047] text-primary-content rounded-lg">
            <div className="card-body">
              <p className='text-2xl'>Our Total Package</p>
              <div className='flex'>
                <p className='my-auto'>Total Active Package</p>
                <div className="radial-progress bg-[#171717] text-primary-content border-4 border-primary" style={{ "--value": 80 }}>80%</div>
              </div>
            </div>
          </div>
          <div className="card w-96 my-3 bg-[#130047] text-primary-content rounded-lg">
            <div className="card-body">
              <p className='text-2xl'>Our Total Package</p>
              <div className='flex'>
                <p className='my-auto'>Total Active Package</p>
                <div className="radial-progress bg-[#171717] text-primary-content border-4 border-primary" style={{ "--value": 80 }}>80%</div>
              </div>
            </div>
          </div>
          <div className="card w-96 my-3 bg-[#130047] text-primary-content rounded-lg">
            <div className="card-body">
              <p className='text-2xl'>Our Total Package</p>
              <div className='flex'>
                <p className='my-auto'>Total Active Package</p>
                <div className="radial-progress bg-[#171717] text-primary-content border-4 border-primary" style={{ "--value": 80 }}>80%</div>
              </div>
            </div>
          </div>

        </div>
        {/* Second  */}
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="card mx-3 my-3 bg-[#130047] text-primary-content rounded-lg">
              <div className="card-body">
                <p className='text-2xl'>Total Active Users</p>
                <div className='flex'>
                  <p className='my-auto'>Total Active Users</p>
                  <div className="radial-progress bg-[#171717] text-primary-content border-4 border-primary" style={{ "--value": 90 }}>90%</div>
                </div>
              </div>
            </div>
            <div className="card mx-3 my-3 bg-[#130047] text-primary-content rounded-lg">
              <div className="card-body">
                <div className="stats shadow bg-[#130047]">

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default AdminHome
