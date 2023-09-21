import { Badge, Button, useDisclosure } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import NotificationModal from '../shared/modal/NotificationModal';
import { fetchData } from '../store/slices/paymenthistorySlice/paymentHistorySlice';
import useAdmin from '../hooks/useAdmin';
import useUsers from '../hooks/useUsers';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.paymentHistory?.data);
  const filters = data.filter((d) => d?.email === user?.email);

  //Notification user dashboard
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleLogOut = async () => {
    console.log('Logging out...');
    try {
      const response = await Swal.fire({
        title: '',
        text: 'Ary you sure you want to log out?',
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
      });
      if (response.isConfirmed) {
        await logOut();

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

  const userNavLinks = [
    { to: 'user-analytics', text: 'Analytics' },
    { to: 'wishlist', text: 'Wishlist' },
    // { to: 'downloads', text: 'Downloads' },
    { to: 'subscriptions', text: 'Subscriptions' },
    { to: 'forum', text: 'Forum' },
    { to: 'watch-party', text: 'Watch Party' },
    // { to: 'recommendation', text: 'Recommendation' },
    { to: 'payment-info', text: 'Payment Info' },
    { to: 'history', text: 'History' },
    
  ];

  const adminNavLinks = [
    { to: "admin-analytics", text: "Analytics" },
    { to: "upload-movie", text: "Upload Movie" },
    { to: "admin/manage-events", text: "Manage Events" },
    // { to: 'revenue', text: 'Ad Revenue Tracking' },
    // { to: 'logs', text: 'System Logs' },
    { to: 'live-channels', text: 'Live Channels' },
    { to: 'admin/manage-subscription', text: 'Manage Subscriptions' },
    { to: 'user-panel', text: 'User Panel' },
    { to: 'user-feedback', text: 'User Feedback' },
    { to: 'admin/paymentHistory', text: 'Payment History' },
    
  ];

  const [isAdmin] = useAdmin();
  const [users] = useUsers();
  console.log(users)
  return (
    <div
      className={`container mx-auto relative drawer flex flex-col gap-5 lg:flex-row h-full`}
    >
      {/* Hamburger Menu */}
      <div className="container fixed z-50 px-4 py-2 lg:hidden w-full bg-zinc-800">
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

      {/* DASHBOARD SIDEBAR */}
      <div
        className={`bg-zinc-800 px-4 w-72 h-screen fixed overflow-y-scroll pt-6 lg:pt-0 z-20 ${
          isSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        <div className="w-full flex  justify-between items-center py-6">
              <Link to='/'>
              <h1 className='font-bold border-l-4 border-cyred pl-2'>CYCO</h1>
              </Link>
              <Link to=''>
              <img
              src={user?.photoURL}
              alt="user-photo"
              title={isAdmin ? 'Admin' : 'User'}
              className="w-16 h-16 p-1 border-2 border-cyred rounded-full object-cover"
            />
              </Link>

            </div>
        {isAdmin ? (
          <div className="h-full w-full flex flex-col">
            
            <hr className="pb-8" />

            {/* ADMIN NAVIGATION */}
            <ul className="flex flex-col gap-2">
              {adminNavLinks.map((navLink, index) => (
                <li key={index} className="w-full">
                  {navLink?.to === 'admin/manage-subscription' &&
                    index < adminNavLinks.length - 1 && <hr className="mt-5" />}

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'btn-active' : 'sidebar-btn'
                    }
                    to={navLink?.to}
                    style={
                      navLink?.to === 'admin/manage-subscription'
                        ? { marginTop: '40px' }
                        : {}
                    }
                  >
                    {navLink?.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="group:mb-0 mt-auto">
  
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
            
            <hr className="pb-8" />

            {/* USER NAVIGATION */}
            <ul className="flex flex-col gap-2">
              {userNavLinks.map((navLink, index) => (
                <li key={index} className="w-full">
                  {navLink.to === 'watch-party' &&
                    index < userNavLinks.length - 1 && <hr className="mt-5" />}

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? 'btn-active' : 'sidebar-btn'
                    }
                    to={navLink?.to}
                    style={
                      navLink?.to === 'watch-party' ? { marginTop: '40px' } : {}
                    }
                  >
                    {navLink?.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="group:mb-0 mt-auto">
              <NavLink to={'help'} className="sidebar-btn">
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
