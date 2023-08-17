import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import logo from '/cy-ico.png'

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-gray-700 ml-4 mt-4">
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`bg-gray-900 text-right w-64 md:w-350 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden md:block'
        }`}
      >
        <div className="py-4">
          <div className="text-white text-xl font-semibold ml-4 mb-6">
            <img src={logo} alt="Website Logo" className='rounded-lg -px-2' />
          </div>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard/admin-home"
                className="block px-4 py-2 text-white hover:bg-gray-800"
              >
                Admin :
              </Link>
            </li>
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
                Payments :
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow text-center">
        <div>
          <div><h3>Dashing Dashboard</h3></div>
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
