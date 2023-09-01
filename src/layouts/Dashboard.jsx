import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const [isAdmin, SetAdmin] = [false];
  const [isAdmin, SetAdmin] = [true];
//   const handleLinkClick = () => {
//     setLinkClicked(true);
//   };
//   const handleLinkFalse = () => {
//     setLinkClicked(false);
//   };

  return (
    <div className={`relative drawer flex flex-col gap-5 lg:flex-row h-full`}>
      {/* Hamburger Menu */}
      <div className='fixed z-50 px-4 py-1 lg:hidden w-full bg-zinc-800'>
        {/* Toggle Bar */}
        <div className="lg:hidden text-white">
          {isSidebarOpen ? (
            <button onClick={toggleSidebar} className="">
              <FaTimes size={24} />
            </button>
          ) : (
            <button onClick={toggleSidebar} className="z-20">
              <FaBars size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Dashboard Sidebar */}
      <div className={`bg-zinc-700 px-4 w-72 h-screen fixed overflow-y-scroll pt-6 lg:pt-0 z-20 ${
            isSidebarOpen ? 'block' : 'hidden lg:block'
          }`}>
        {isAdmin ? (
          <div className='h-full w-full flex flex-col'>
            <div className="w-full flex  justify-between items-center py-6">
              <img
                className={`w-10 h-10 rounded-full`}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7dCWaK60Ug98OktQFyui1Hj0EPGcWc6AvNqIx6pi&s"
                alt=""
              />
              <div className='bg-white w-4 h-4'></div>
            </div>
            <hr className='pb-8' />
            <ul className='flex-1'>

              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='admin-home' >Dashboard </NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='upload-new-movie' >Upload new movie</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='revenue-tracking' >Ad Revenue Tracking</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='system-logs' >System Logs</NavLink>
              </li>

              <hr className='my-8' />

              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='manage-subscription' >Manage Subscriptions</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='modernization' >Moderation</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='user-pannel-list' >User Panel Lists</NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) =>
                  isActive ? 'btn-active' : 'sidebar-btn'
                } to='user-feedback' >User Feedback</NavLink>
              </li>
            </ul>
            <div className='group:mb-0'>
              <div className='sidebar-btn'>
                <button >Settings</button>
              </div>
              <div className='sidebar-btn'>
                <button onClick={handleLogOut}>Sign Out</button>
              </div>
            </div>

          </div>
        ) : (
          <div className='h-full w-full flex flex-col'>
          <div className="w-full flex  justify-between items-center py-6">
            <img
              className={`w-10 h-10 rounded-full`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7dCWaK60Ug98OktQFyui1Hj0EPGcWc6AvNqIx6pi&s"
              alt=""
            />
            <div className='bg-white w-4 h-4'></div>
          </div>
          <hr className='pb-8' />
          <ul className='flex-1'>

            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='users-home' >Profile </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='watchList' >Wishlist</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='downloads' >Downloads</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='subscriptions' >Subscriptions</NavLink>
            </li>

            <hr className='my-8' />

            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='forum' >Forum</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='watch-party' >Watch Party</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='recommendation' >Recommendation</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='update-payment-info' >Update Payment Info</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? 'btn-active' : 'sidebar-btn'
              } to='history' >History</NavLink>
            </li>
          </ul>
          <div className='group:mb-0'>
            <div className='sidebar-btn'>
              <button >Help</button>
            </div>
            <div className='sidebar-btn'>
              <button onClick={handleLogOut}>Sign Out</button>
            </div>
          </div>

        </div>
        )}
      </div>


      {/* Display Page Content */}
      <div
        className={`drawer-content ${isSidebarOpen ? '' : 'blur-none'
          } h-full w-full pt-6 lg:pt-0 lg:ml-72`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
