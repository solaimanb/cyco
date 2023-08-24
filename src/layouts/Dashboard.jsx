import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Divider from '../components/divider/Divider';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';
import logo from '/cy-ico.png';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLinkClick = () => {
    setLinkClicked(true);
  };
  const handleLinkFalse = () => {
    setLinkClicked(false);
  };
  const [isAdmin, SetAdmin] = [false];

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
        className={`bg-[#2d2386c8] bg-opacity-60 text-right w-64 md:w-350 transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        <div className="py-4  px-7 ">
          <div className="text-white text-xl font-semibold ml-4 mb-6 flex justify-end">
            <Link onClick={handleLinkFalse} to="/dashboard">
              <img
                src={logo}
                alt="Website Logo"
                className="rounded-lg -px-2 w-24 h-24"
              />
            </Link>
          </div>
          {/* Admin Dashbord */}
          {isAdmin ? (
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Admin Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/manage-users"
                  className="block px-4 py-2  text-white hover:bg-gray-800"
                >
                  Manage Users
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/add-new-media"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Add New Media :
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/payments"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Users Payments :
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="space-y-2">
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/users-home"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  User Profile :
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/watchlist"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  My WatchList :
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/try-premium"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Try Premium :
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/my-package"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  My Packages :
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/payment-history"
                  className="block px-2 py-2 text-white hover:bg-gray-800"
                >
                  Payment History:
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/account-settings"
                  className="block px-2 py-2 text-white hover:bg-gray-800"
                >
                  Account Settings:
                </Link>
              </li>
            </ul>
          )}

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
                  Movies :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  About Us :
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 text-white hover:bg-gray-800"
                >
                  Live Tv :
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex-grow bg-[#160665]">
        {!linkClicked ? (
          <AdminHome />
        ) : (
          <div>
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
