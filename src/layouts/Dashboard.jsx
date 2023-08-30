import React, { useState } from 'react';
import {
  FaBars,
  FaDownload,
  FaHome,
  FaInfo,
  FaMoneyBill,
  FaPeopleArrows,
  FaRandom,
  FaRegChartBar,
  FaRegUserCircle,
  FaSignOutAlt,
  FaSun,
  FaTimes,
  FaTv,
  FaVideoSlash,
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

  // const [isAdmin, SetAdmin] = [false];
  const [isAdmin, SetAdmin] = [true];

  return (
    <div className={`drawer flex flex-col gap- lg:flex-row h-full`}>
      {/* Hamburger Menu */}
      <div
        className={`sticky top-0 left-0 p-2 bg-zinc-800 z-20 ${
          isSidebarOpen ? '' : ''
        }`}
      >
        {/* Toggle Bar */}
        <div className="lg:hidden text-white">
          {isSidebarOpen ? (
            <button onClick={toggleSidebar} className="z-20">
              <FaTimes size={24} />
            </button>
          ) : (
            <button onClick={toggleSidebar} className="z-20">
              <FaBars size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Collapsed navigation bar */}
      <nav
        className={`fixed card h-screen overflow-hidden z-40 lg:hidden inset-0 bg-zinc-900 border-r border-cyred backdrop-blur-2xl text-left w-[70%] md:w-[40%] transition-all duration-300 ${
          isSidebarOpen ? 'block mt-12 px-3' : 'hidden lg:block'
        }`}
      >
        <div className="py-5 mt-5 ">
          {isAdmin ? (
            <ul className="space-y-3 z-10">
              <li className="dashBoard-link">
                <Link
                  className="tooltip tooltip-right flex items-center gap-2"
                  to="users-home"
                  data-tip="Profile"
                >
                  <FaRegUserCircle size={22} />
                  Profile
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/upload-new-movie"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Details"
                >
                  <FaRegChartBar size={22} /> Upload New Movies
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/revenue-tracking"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Revenue Tracking
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/system-logs"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> System Logs
                </Link>
              </li>

              <div className="divider"></div>

              <li className="dashBoard-link ">
                <Link
                  to="/dashboard/manage-subscription"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Home"
                >
                  <FaHome size={22} /> Manage Subscription
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/modernization"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Details"
                >
                  <FaRegChartBar size={22} /> Modrization
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-pannel-list"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> User Panel Lists
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-feedback"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Users FeedBack
                </Link>
              </li>

              <div className="divider"></div>

              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-feedback"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Stats"
                >
                  <FaInfo size={22} /> Settings
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/dashboard/user-feedback"
                  className="tooltip tooltip-right flex gap-2 items-center"
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
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Profile"
                >
                  <FaRegUserCircle size={22} />
                  Profile
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="watchList"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Watchlist"
                >
                  <FaVideoSlash />
                  Watchlist
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="downloads"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Downloads"
                >
                  <FaDownload />
                  Downloads
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="subscriptions"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Subscriptions"
                >
                  <FaMoneyBill />
                  Subscriptions
                </Link>
              </li>
              <div className="divider my-8"></div>
              <li className="dashBoard-link">
                <Link
                  to="forum"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Forum"
                >
                  <FaPeopleArrows />
                  Forum
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="watch-party"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Watch Party"
                >
                  <FaTv />
                  Watch Party
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="/recommendation"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Recommendation"
                >
                  <FaRandom />
                  Recommendation
                </Link>
              </li>
              <li className="dashBoard-link">
                <Link
                  to="update-payment-info"
                  className="tooltip tooltip-right flex gap-2 items-center"
                  data-tip="Updated Payment Info"
                >
                  <FaInfo />
                  Update Info
                </Link>
              </li>
              <div className="divider mb-4"></div>
              <div className="mb-5 space-y-2">
                <li className="dashBoard-link">
                  <Link
                    to="account-settings"
                    className="tooltip tooltip-right flex gap-2 items-center"
                    data-tip="settings"
                  >
                    <FaSun />
                    Settings
                  </Link>
                </li>
                <li className="dashBoard-link ">
                  <Link
                    to="account-settings"
                    className="tooltip tooltip-right flex gap-2 items-center"
                    data-tip="settings"
                  >
                    <FaSignOutAlt />
                    Logout
                  </Link>
                </li>
              </div>
            </ul>
          )}
        </div>
      </nav>

      {/* Dashboard Sidebar */}
      <div className={`hidden lg:flex bg-zinc-800`}>
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

            <div className="divider"></div>

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

            <div className="divider"></div>

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

      {/* Display Page Content */}
      <div
        className={`drawer-content w-full h-screen pt-5 lg:pt-0 lg:pl-5 bg-zinc-900 ${
          isSidebarOpen ? '' : ''
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
