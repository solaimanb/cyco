import React, { useState } from 'react';
import {
  FaBars,
  FaHome,
  FaInfo,
  FaRegChartBar,
  FaRegSun,
  FaSignInAlt,
  FaSignOutAlt,
  FaTimes,
} from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

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
    <div className={`relative drawer flex flex-co gap-5 lg:flex-row h-full`}>
      {/* Hamburger Menu */}
      <div
        className={`flex flex-col justify-between items-center gap-6 z-50 px-4 lg:px-1 pt-5 fixed ${
          isSidebarOpen ? 'bg-transparent' : 'bg-zinc-800'
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

        {/* -------User routes------- */}
        <div className="flex lg:flex-col h-screen px-2">
          <div className="w-full flex gap-3 justify-start py-3 px-">
            <img
              className={`${
                isSidebarOpen ? 'hidden' : 'hidden lg:block'
              } w-10 h-10 rounded-full`}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7dCWaK60Ug98OktQFyui1Hj0EPGcWc6AvNqIx6pi&s"
              alt=""
            />
          </div>

          <div className="divider"></div>

          <ul className="hidden lg:flex gap-3 text-sm flex-col justify-start pl-0">
            <li>
              <Link
                className="tooltip tooltip-right flex items-center gap-2 bg-zinc-800 px-2 py-1 rounded-sm"
                to="users-home"
                data-tip="Profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/upload-new-movie"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Details"
              >
                <FaRegChartBar size={22} /> Upload New Movies
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/revenue-tracking"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Stats"
              >
                <FaInfo size={22} /> Revenue Tracking
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/system-logs"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Stats"
              >
                <FaInfo size={22} /> System Logs
              </Link>
            </li>

            <div className="divider"></div>

            <li>
              <Link
                to="/dashboard/manage-subscription"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Home"
              >
                <FaHome size={22} /> Manage Subscription
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/modernization"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Details"
              >
                <FaRegChartBar size={22} /> User Panel Lists
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/user-pannel-list"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Stats"
              >
                <FaInfo size={22} /> User Panel Lists
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/user-feedback"
                className="tooltip tooltip-right flex items-center gap-2"
                data-tip="Stats"
              >
                <FaInfo size={22} /> Users FeedBack
              </Link>
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div
          className={`hidden lg:flex ${
            isSidebarOpen ? 'flex-row-reverse' : 'flex-col'
          } items-center mt-auto gap-3`}
        >
          <Link className="tooltip tooltip-right" data-tip="settings">
            <FaRegSun size={22} />
          </Link>
          {user ? (
            <Link className="tooltip tooltip-right" data-tip="sign-out">
              <FaSignOutAlt size={22} />
            </Link>
          ) : (
            <Link className="tooltip tooltip-right" data-tip="sign-out">
              <FaSignInAlt size={22} />
            </Link>
          )}
          {isAdmin ? (
            <ul className="hidden lg:flex gap-3 text-sm flex-col justify-start pl-0">
              <li className="dashBoard-link">
                <Link
                  className="tooltip tooltip-right flex"
                  to="users-home"
                  data-tip="Profile"
                >
                  Profile
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/upload-new-movie"
                  className="tooltip tooltip-right flex "
                  data-tip="Details"
                >
                  <FaRegChartBar size={22} /> Upload New Movies
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/revenue-tracking"
                  className="tooltip tooltip-right flex"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Revenue Tracking
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/system-logs"
                  className="tooltip tooltip-right flex"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> System Logs
                </Link>
              </li>

              <Divider />
              <div className="-mt-14">
                <Divider />
              </div>
              <li className="dashBoard-link ">
                <Link
                  to="/dashboard/manage-subscription"
                  className="tooltip tooltip-right flex"
                  data-tip="Home"
                >
                  <FaHome size={22} /> Manage Subscription
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/modernization"
                  className="tooltip tooltip-right flex "
                  data-tip="Details"
                >
                  <FaRegChartBar size={22} /> Modrization
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-pannel-list"
                  className="tooltip tooltip-right flex"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> User Panel Lists
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-feedback"
                  className="tooltip tooltip-right flex"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Users FeedBack
                </Link>
              </li>
              <Divider />
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-feedback"
                  className="tooltip tooltip-right flex"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Settings
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-feedback"
                  className="tooltip tooltip-right flex"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Logout
                </Link>
              </li>
            </ul>
          ) : (
            // users routes ,, for change be careful or notify leader. tnx
            <ul className="hidden lg:flex gap-3 text-sm flex-col justify-start pl-0">
              <li className="dashBoard-link">
                <Link
                  to="users-home"
                  className="tooltip tooltip-right flex"
                  data-tip="Profile"
                >
                  Profile
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="watchList"
                  className="tooltip tooltip-right flex "
                  data-tip="Watchlist"
                >
                  Watchlist
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="downloads"
                  className="tooltip tooltip-right flex "
                  data-tip="Downloads"
                >
                  Downloads
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="subscriptions"
                  className="tooltip tooltip-right flex "
                  data-tip="Subscriptions"
                >
                  Subscriptions
                </Link>
              </li>
              <div className="divider my-8"></div>
              <li className="dashBoard-link">
                <Link
                  to="forum"
                  className="tooltip tooltip-right flex "
                  data-tip="Forum"
                >
                  Forum
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="watch-party"
                  className="tooltip tooltip-right flex "
                  data-tip="Watch Party"
                >
                  Watch Party
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="recommendation"
                  className="tooltip tooltip-right flex "
                  data-tip="Recommendation"
                >
                  Recommendation
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="update-payment-info"
                  className="tooltip tooltip-right flex "
                  data-tip="Updated Payment Info"
                >
                  Update Info
                </Link>
              </li>
              <div className="divider mb-4"></div>
              <div className="mb-5 space-y-2">
                <li className="dashBoard-link">
                  <Link
                    to="account-settings"
                    className="tooltip tooltip-right flex "
                    data-tip="settings"
                  >
                    Settings
                  </Link>
                </li>
                <li className="dashBoard-link ">
                  <Link
                    to="account-settings"
                    className="tooltip tooltip-right flex "
                    data-tip="settings"
                  >
                    Logout
                  </Link>
                </li>
              </div>
            </ul>
          )}
        </div>
      </div>

      {/* Dashboard Sidebar */}
      <div className="border-l-8 border-cyred">
        {/* <nav
          className={`fixed card h-screen overflow-hidden z-40 lg:hidden inset-0 bg-zinc-900 backdrop-blur-2xl text-left w-[70%] md:w-[40%] transition-all duration-300 ${
            isSidebarOpen ? 'block' : 'hidden lg:block'
          }`}
        > */}
        <div className="py-5 mt-5 ">
          <div className="text-white bg-zinc-800 rounded-sm mx-2 text-xl font-semibold ml-4 mb-6 flex justify-end">
            {/* <Link onClick={handleLinkFalse} to="/dashboard">
              <img
                src={logo}
                alt="Website Logo"
                className="rounded-lg -px-2 w-24 h-24"
              />
            </Link> */}
          </div>

          {/* -------Admin routes------- */}
          {/* {isAdmin ? (
              <ul className="space-y-3 z-10 ">
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
                  </ul>)} */}
        </div>
      </div>
      <div className="border-l-9 border-cyred mx-11">
        <nav
          className={`fixed card h-screen overflow-hidden z-40 lg:hidden inset-0 bg-zinc-900 backdrop-blur-2xl text-left w-[70%] md:w-[40%] transition-all duration-300 ${
            isSidebarOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          <div className="py-5 mt-5 ">
            {isAdmin ? (
              <ul className="space-y-3 z-10">
                <li>
                  <Link
                    className="tooltip tooltip-right flex items-center gap-2 bg-base-300 px-2 py-1 rounded-sm"
                    to="users-home"
                    data-tip="Profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/upload-new-movie"
                    className="tooltip tooltip-right flex "
                    data-tip="Details"
                  >
                    <FaRegChartBar size={22} /> Upload New Movies
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/revenue-tracking"
                    className="tooltip tooltip-right flex"
                    data-tip="Stats"
                  >
                    <FaInfo size={22} /> Revenue Tracking
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/system-logs"
                    className="tooltip tooltip-right flex"
                    data-tip="Stats"
                  >
                    <FaInfo size={22} /> System Logs
                  </Link>
                </li>

                <Divider />
                <div className="-mt-14">
                  <Divider />
                </div>
                <li className="dashBoard-link ">
                  <Link
                    to="/dashboard/manage-subscription"
                    className="tooltip tooltip-right flex"
                    data-tip="Home"
                  >
                    <FaHome size={22} /> Manage Subscription
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/modernization"
                    className="tooltip tooltip-right flex "
                    data-tip="Details"
                  >
                    <FaRegChartBar size={22} /> Modrization
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/user-pannel-list"
                    className="tooltip tooltip-right flex"
                    data-tip="Stats"
                  >
                    <FaInfo size={22} /> User Panel Lists
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/user-feedback"
                    className="tooltip tooltip-right flex"
                    data-tip="Stats"
                  >
                    <FaInfo size={22} /> Users FeedBack
                  </Link>
                </li>
                <Divider />
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/user-feedback"
                    className="tooltip tooltip-right flex"
                    data-tip="Stats"
                  >
                    <FaInfo size={22} /> Settings
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/dashboard/user-feedback"
                    className="tooltip tooltip-right flex"
                    data-tip="Stats"
                  >
                    <FaInfo size={22} /> Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="space-y-3 z-10">
                <li className="dashBoard-link">
                  <Link
                    to="users-home"
                    className="tooltip tooltip-right flex"
                    data-tip="Profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="watchList"
                    className="tooltip tooltip-right flex "
                    data-tip="Watchlist"
                  >
                    Watchlist
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="downloads"
                    className="tooltip tooltip-right flex "
                    data-tip="Downloads"
                  >
                    Downloads
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="subscriptions"
                    className="tooltip tooltip-right flex "
                    data-tip="Subscriptions"
                  >
                    Subscriptions
                  </Link>
                </li>
                <div className="divider my-8"></div>
                <li className="dashBoard-link">
                  <Link
                    to="forum"
                    className="tooltip tooltip-right flex "
                    data-tip="Forum"
                  >
                    Forum
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="watch-party"
                    className="tooltip tooltip-right flex "
                    data-tip="Watch Party"
                  >
                    Watch Party
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="/recommendation"
                    className="tooltip tooltip-right flex "
                    data-tip="Recommendation"
                  >
                    Recommendation
                  </Link>
                </li>
                <li className="dashBoard-link">
                  <Link
                    to="update-payment-info"
                    className="tooltip tooltip-right flex "
                    data-tip="Updated Payment Info"
                  >
                    Update Info
                  </Link>
                </li>
                <div className="divider mb-4"></div>
                <div className="mb-5 space-y-2">
                  <li className="dashBoard-link">
                    <Link
                      to="account-settings"
                      className="tooltip tooltip-right flex "
                      data-tip="settings"
                    >
                      Settings
                    </Link>
                  </li>
                  <li className="dashBoard-link ">
                    <Link
                      to="account-settings"
                      className="tooltip tooltip-right flex "
                      data-tip="settings"
                    >
                      Logout
                    </Link>
                  </li>
                </div>
              </ul>
            )}
          </div>
        </nav>
      </div>

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