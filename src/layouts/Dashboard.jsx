import React, { useState } from 'react';
import { FaBars, FaBell, FaTimes } from 'react-icons/fa';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logOut } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    console.log('Logging out...');
    try {
      const response = await Swal.fire({
        title: '',
        text: 'Ary you sure you want to log out?',
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
        showCancelButton: true
      } )
      if ( response.isConfirmed ) {
          await logOut()
          navigate('/login');	
      }
      
      return;
    } catch (error) {
      console.log('Logout failed', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isAdmin, SetAdmin] = useState(false);
  // const [isAdmin, SetAdmin] = useState(true);

  return (
    <div className={`relative drawer flex flex-col gap-5 lg:flex-row h-full`}>
      {/* Hamburger Menu */}
      <div className="fixed z-50 px-4 py-1 lg:hidden w-full bg-zinc-800">
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
      <div
        className={`bg-zinc-700 px-4 w-72 h-screen fixed overflow-y-scroll pt-6 lg:pt-0 z-20 ${
          isSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {isAdmin ? (
          <div className="h-full w-full flex flex-col">
            <div className="w-full flex  justify-between items-center py-6">
              <img
                className={`w-10 h-10 rounded-full`}
                src="https://people.com/thmb/ySDyAcr9BJnqRJKcw04-92QlU_U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x279:751x281)/nick-fury-cut-iron-man-scene-030223-f25e3aa7570e48efa14155c323161ddb.jpg"
                alt="admin-profile"
              />
              <div className="">
                <FaBell size={22} />
              </div>
            </div>

            <hr className="pb-8" />

            <ul className="flex-1">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to=""
                >
                  Analytics
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="upload-movie"
                >
                  Upload Movie
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="revenue"
                >
                  Ad Revenue Tracking
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="logs"
                >
                  System Logs
                </NavLink>
              </li>

              <hr className="my-8" />

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="manage-subscription"
                >
                  Manage Subscriptions
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="modernization"
                >
                  Moderation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="user-pannel-list"
                >
                  User Panel Lists
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="user-feedback"
                >
                  User Feedback
                </NavLink>
              </li>
            </ul>
            <div className="group:mb-0">
              <div className="sidebar-btn">
                <button>Settings</button>
              </div>
              <button
                onClick={() => handleLogOut()}
                className="sidebar-btn w-full text-start"
              >
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex flex-col">
            <div className="w-full flex  justify-between items-center py-6">
              <img
                className={`w-10 h-10 rounded-full object-cover`}
                src="https://images.teamtalk.com/content/uploads/2023/02/13070521/man-utd-manager-erik-ten-hag.jpg"
                alt="user-profile"
              />
              <div className="">
                <FaBell size={22} />
              </div>
            </div>
            <hr className="pb-8" />
            <ul className="flex-1">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="users-home"
                >
                  Profile{' '}
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="wishlist"
                >
                  Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="downloads"
                >
                  Downloads
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="subscriptions"
                >
                  Subscriptions
                </NavLink>
              </li>

              <hr className="my-8" />

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="forum"
                >
                  Forum
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="watch-party"
                >
                  Watch Party
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="recommendation"
                >
                  Recommendation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="payment-info"
                >
                  Payment Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="history"
                >
                  History
                </NavLink>
              </li>

              <hr className="my-8" />

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'btn-active' : 'sidebar-btn'
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
            </ul>
            <div className="group:mb-0">
              <NavLink to={'/help'} className="sidebar-btn">
                <button>Help</button>
              </NavLink>
              <button
                onClick={() => handleLogOut()}
                className="sidebar-btn w-full text-start"
              >
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Display Page Content */}
      <div
        className={`drawer-content ${
          isSidebarOpen ? '' : 'blur-none'
        } min-h-screen w-full pt-6 lg:pt-0 lg:ml-72`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
