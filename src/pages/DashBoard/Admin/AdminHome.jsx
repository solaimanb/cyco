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
                <p className='text-2xl'>Total Added Media</p>
                <div className='flex'>
                  <p className='my-auto'>Total Active Users</p>
                  <div className="radial-progress bg-[#171717] text-primary-content border-4 border-primary" style={{ "--value": 90 }}>90%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
