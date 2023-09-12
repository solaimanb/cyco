import React, { useEffect, useState } from 'react';
import { RiNotificationBadgeFill } from 'react-icons/ri';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import NotificationsDropdown from '../../pages/notify/NotificationDropDown';
import './NavBar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationHistory, setNotificationHistory] = useState([]);
  const socket = io.connect(`${import.meta.env.VITE_SERVER_URL}`);

  // NOTIFICATION HANDLERS:---------------------->>>>
  useEffect(() => {
    socket.on('receive_notification', (data) => {
      setNotificationCount((prevCount) => prevCount + 0.5);
      setNotificationHistory((prevHistory) => [
        data?.notification,
        ...prevHistory,
      ]);
    });
    // }, []);
  }, [socket]);

  const handleShowNotificationsClick = () => {
    setShowNotifications(true);
    setNotificationCount(0);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  // LOGOUT-HANDLER:---------------------->>>>
  const handleLogOut = () => {
    Swal.fire({
      text: 'Are you sure?',
      icon: 'warning',
      background: '#222',
      // showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Logout',
      cancelButtonText: 'Cancel',
    })
      .then((response) => {
        if (response.isConfirmed) {
          logOut()
            .then()
            .catch((error) => console.log(error));

          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          text: 'An error occurred while logging out. Please try again!',
          icon: 'error',
          background: '#222',
        });
      });
  };

  // REGULAR DEVICE NAV-ITEMS:---------------------->>>>
  const regDeviceNavItems = [
    { to: '/', label: 'Home', ariaLabel: 'home' },
    { to: '/trailer', label: 'Trailer', ariaLabel: 'trailer' },
    { to: '/movies', label: 'Movies', ariaLabel: 'movies' },
    { to: '/series', label: 'Series', ariaLabel: 'series' },
    { to: '/live-tv', label: 'LiveTV', ariaLabel: 'live-tv' },
    { to: '/about', label: 'About', ariaLabel: 'about' },
    { to: '/contact', label: 'Contact US', ariaLabel: 'contact' },
  ];

  // SMALL DEVICE NAV-ITEMS:---------------------->>>>
  const smallDeviceNavItems = [
    { to: '/', label: 'Home', ariaLabel: 'Home' },
    { to: '/trailer', label: 'Trailer', ariaLabel: 'Trailer' },
    { to: '/movies', label: 'Movies', ariaLabel: 'Movies' },
    { to: '/series', label: 'Series', ariaLabel: 'Series' },
    {
      condition: (user) => user,
      loggedInItems: [
        { to: '/dashboard', label: 'Dashboard', ariaLabel: 'Dashboard' },
        { label: 'Logout', onClick: handleLogOut },
      ],
      loggedOutItem: { to: '/login', label: 'Login', ariaLabel: 'Login' },
    },
  ];

  return (
    <header className="stick absolute z-50 top-0 left-0 backdrop-blur-lg md:backdrop-blur-2xl w-full py-1">
      {/* NAVIGATION BAR */}
      <div className="gray-800 flex flex-row lg:px-24 mx-auto text-white items-center justify-between py-2 lg:py-5">
        <Link className="hidden lg:flex" to="/">
          <h3 className="font-bold text-2xl">CYCO</h3>
        </Link>

        {/* REGULAR DEVICE SCREEN NAV-ITEMS */}
        <ul className="nav-ul items-center hidden lg:flex font-bold md:mx-20 text-sm lg:text-base">
          {regDeviceNavItems?.map((item, index) => (
            <li key={index}>
              <NavLink
                id="nav"
                to={item?.to}
                aria-label={item?.ariaLabel}
                title={item?.label}
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                {item?.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RESPONSIVE SMALL DEVICE NAV-ITEMS */}
        <div className="flex items-center justify-between lg:hidden py-3 lg:my-5 px-5">
          {/* MENU HAMBURGER BTN */}
          <div>
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 text-gray-100" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>

          {/* CONDITIONAL NAV-LINKS BY HAMBURGER CLICK */}
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="py-5 bg-cyred text-white shadow-sm">
                <div className="flex flex-row items-center justify-between mb-4">
                  {/* MENU CROSS BTN */}
                  <div className="ml-5 mt-2">
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 border-2 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className="w-5 text-white hover:text-cyred"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div>
                    <span className="mr-5 text-xl font-bold tracking-widest uppercase">
                      CYCO
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mt-10 ml-5">
                  {smallDeviceNavItems?.map((item, index) => (
                    <li
                      key={index}
                      className={
                        item?.condition && !item.condition(user) ? 'hidde' : ''
                      }
                    >
                      <Link
                        to={item?.to}
                        className={`${
                          item?.condition
                            ? ' '
                            : 'tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1'
                        }`}
                      >
                        {item?.label}

                        {item?.condition && item?.condition(user) ? (
                          <div className="flex flex-col">
                            {item?.loggedInItems?.map((subItem, subIndex) =>
                              subItem?.onClick ? (
                                <div className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1">
                                  <button onClick={subItem?.onClick}>
                                    {subItem?.label}
                                  </button>
                                </div>
                              ) : (
                                <div className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1">
                                  <Link
                                    to={subItem?.to}
                                    aria-label={subItem?.ariaLabel}
                                  >
                                    {subItem?.label}
                                  </Link>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <Link
                            to={item?.loggedOutItem?.to}
                            aria-label={item?.loggedOutItem?.ariaLabel}
                            className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                          >
                            {item?.loggedOutItem?.label}
                          </Link>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* USER STATE DEPENDABLE NAV-LINKS */}
        <div className="flex items-center gap-4">
          {/* NOTIFICATION INDICATOR BELL */}
          <div className="relative">
            <div className="relative">
              <RiNotificationBadgeFill size={22} className="" />
              {notificationCount > 0 && (
                <div className="absolute top-[1px] left-[13px] w-[9px] h-[9px] rounded-full bg-cyred animate-pulse"></div>
              )}
            </div>

            <div
              className="notification-icon"
              onClick={handleShowNotificationsClick}
            >
              {notificationCount > 0 && (
                <div className="notification-badge">{notificationCount}</div>
              )}
            </div>

            {showNotifications && (
              <NotificationsDropdown
                notificationCount={notificationCount}
                notificationHistory={notificationHistory}
                onClose={handleCloseNotifications}
              />
            )}
          </div>

          {/* USER STATE-LINKS */}
          <>
            <li className="flex items-center">
              {user ? (
                <>
                  <NavLink
                    id="nav"
                    to="/dashboard "
                    aria-label="Dashboard "
                    title="Dashboard "
                    className={({ isActive }) =>
                      isActive ? 'active' : 'default'
                    }
                  >
                    Dashboard
                  </NavLink>
                  <button onClick={handleLogOut} id="nav" className="">
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  id="nav"
                  to="/login"
                  aria-label="login"
                  title="Login"
                  className={({ isActive }) =>
                    isActive ? 'bg-cyred' : 'default'
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
