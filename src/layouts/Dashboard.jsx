import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Divider from '../components/divider/Divider';
import logo from '/cy-ico.png';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isAdmin, SetAdmin] = [true];

  return (
    <div className="flex h-screen">
      {/* Hamburger Menu */}
      <div className="lg:hidden">
        {isSidebarOpen ? (
          <button onClick={toggleSidebar} className="close-button">
            <FaTimes size={24} />
          </button>
        ) : (
          <button onClick={toggleSidebar} className="text-gray-700 ml-2 mt-4">
            <FaBars size={24} />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <nav
        className={`bg-[#111] bg-opacity-60 text-right w-64 md:w-350 transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden lg:block'
          }`}
      >
        <div className="py-4 bg-[#2d2386c8] px-7 ">
          <div className="text-white text-xl font-semibold ml-4 mb-6 flex justify-end">
            <Link to='/dashboard'><img src={logo} alt="Website Logo" className='rounded-lg -px-2 w-24 h-24' /></Link>
          </div>
          {/* Admin Dashbord */}
          {
            isAdmin ? (
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard/admin-home"
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin-home"
                    className="block px-4 py-2  text-white hover:bg-gray-800"
                  >
                    Manage Users
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/add-new-media"
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    Add New Media :
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/payments"
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    Cash :
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard/users-home"
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    User :
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/"
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    My WatchList :
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/"
                    className="block px-4 py-2 text-white hover:bg-gray-800"
                  >
                    My Packages :
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/"
                    className="block px-2 py-2 text-white hover:bg-gray-800"
                  >
                    Payment History:
                  </Link>
                </li>
                {/* Add more links as needed */}
              </ul>
            )
          }


          <div>
            <Divider />
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Home :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Example 1 :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Example 2 :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Example 3 :
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div>
            <Divider />
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  someThing :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  someThing 1 :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  someThing 2 :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  someThing 3 :
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </nav >

      {/* Main Content */}
      < div className="flex-grow bg-[#160665]" >
        <div>
          <div>
            <h3 className=''>Dashing Dashboard</h3></div>
          <Outlet />
        </div>
      </div >
    </div >
  );
};

export default Dashboard;
