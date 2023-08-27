import React, { useState } from 'react';
import {
  FaBars,
  FaBell,
  FaRegChartBar,
  FaRegSun,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
} from 'react-icons/fa';
import { LuListVideo } from 'react-icons/lu';
import { MdSpaceDashboard } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// import AdminHome from '../pages/DashBoard/Admin/AdminHome';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const { user } = useAuth();

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
    <div className={`relative drawer flex flex-col lg:flex-row h-screen`}>
      {/* Hamburger Menu */}
      <div
        className={`flex lg:flex-col justify-between items-center gap-6 z-50 px-4 lg:px-1 pt-5 ${
          isSidebarOpen ? 'bg-transparent' : 'bg-zinc-800 border-r'
        }`}
      >
        {/* Toggle Bar */}
        <div className="lg:hidden text-white mb-4">
          {isSidebarOpen ? (
            <button onClick={toggleSidebar} className="fixed z-50">
              <FaTimes size={24} />
            </button>
          ) : (
            <button onClick={toggleSidebar} className="">
              <FaBars size={24} />
            </button>
          )}
        </div>

        {/* Users State */}
        <div className="flex lg:flex-col justify-between h-full pb-5 px-2">
          <div className="w-full flex gap-3 justify-start py-3 px-">
            <img
              className={`${
                isSidebarOpen ? 'hidden' : 'block'
              } w-6 h-6 rounded-full`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7dCWaK60Ug98OktQFyui1Hj0EPGcWc6AvNqIx6pi&s"
              alt=""
            />
            <h2>Antonio</h2>
          </div>

          <div className="divider"></div>

          <ul className="hidden lg:flex gap-3 text-sm flex-col justify-start pl-0">
            <li>
              <Link
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Stats"
              >
                <FaBell size={22} /> Notifications
              </Link>
            </li>
            <li>
              <Link
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Home"
              >
                <MdSpaceDashboard size={22} /> Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Home"
                to='/dashboard/watchList'
              >
                <LuListVideo size={22} /> Wishlist
              </Link>
            </li>
            <li>
              <Link
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Details"
              >
                <FaRegChartBar size={22} /> Analytics
              </Link>
            </li>
          </ul>

          <div
            className={`hidden lg:flex ${
              isSidebarOpen ? 'flex-row-reverse' : 'flex-col'
            } mt-auto gap-2`}
          >
            <Link
              className="tooltip tooltip-right flex items-center gap-2 text-sm"
              data-tip="settings"
            >
              <FaRegSun size={22} /> Settings
            </Link>
            {user ? (
              <Link
                className="tooltip tooltip-right flex items-center gap-2 text-sm"
                data-tip="sign-out"
              >
                <FaSignOutAlt size={22} /> Sign Out
              </Link>
            ) : (
              <Link
                className="tooltip tooltip-right flex items-center gap-2 text-sm"
                data-tip="sign-out"
              >
                <FaSignInAlt size={22} /> Sign In
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Sidebar */}
      <nav
        className={`fixed h-full z-40 lg:hidden inset-0 bg-zinc-900 backdrop-blur-2xl text-left w-[70%] md:w-[40%] transition-all duration-300 ${
          isSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        <div className="py-5 mt-5">
          <div className="text-white bg-zinc-800 rounded-sm mx-2 text-xl font-semibold ml-4 mb-6 flex justify-end">
            {/* <Link onClick={handleLinkFalse} to="/dashboard">
              <img
                src={logo}
                alt="Website Logo"
                className="rounded-lg -px-2 w-24 h-24"
              />
            </Link> */}
          </div>

          {isAdmin ? (
            <ul className="space-y-3 z-10">
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Admin Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/manage-users"
                  className="block px-4 py-2  text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Manage Users
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/add-new-media"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Add New Media
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/payments"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Users Payments
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/users-home"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  User Profile
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/watchlist"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  My WatchList
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/try-premium"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Try Premium
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/my-package"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  My Packages
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/payment-history"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Payment History
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLinkClick}
                  to="/dashboard/account-settings"
                  className="block px-4 py-2 text-white bg-zinc-800 rounded-sm mx-2 hover:bg-gray-800 border-b border-cyred"
                >
                  Account Settings
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Display Page Content */}
      <div
        className={`drawer-content ${
          isSidebarOpen ? 'brightness-0 -mt-16' : 'blur-none'
        } h-full w-full mt-5`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
