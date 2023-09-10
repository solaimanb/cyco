import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

import { MdAccountCircle } from 'react-icons/md';

import {
  Button,
  useDisclosure,
  Badge,
} from "@nextui-org/react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import NotificationModal from "../shared/modal/NotificationModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/slices/paymenthistorySlice/paymentHistorySlice";
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user, logOut } = useAuth();
  // console.log(user);
  const navigate = useNavigate();

  //Notification user dashboard

  const dispatch = useDispatch();
  const data = useSelector((state) => state.paymentHistory.data);
  useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
      const filters = data.filter((d)=>d.email === user?.email)
     
      console.log(filters);

  const handleLogOut = async () => {
    console.log("Logging out...");
    try {
      const response = await Swal.fire({
        title: "",
        text: "Ary you sure you want to log out?",
        confirmButtonText: "Logout",
        cancelButtonText: "Cancel",
        showCancelButton: true,
      });
      if (response.isConfirmed) {
        await logOut();

        navigate("/login");
      }

      return;
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const userNavLinks = [
    { to: 'users-home', text: 'Profile' },
    { to: 'wishlist', text: 'Wishlist' },
    // { to: 'downloads', text: 'Downloads' },
    { to: 'subscriptions', text: 'Subscriptions' },
    { to: 'forum', text: 'Forum' },
    { to: 'watch-party', text: 'Watch Party' },
    // { to: 'recommendation', text: 'Recommendation' },
    { to: 'payment-info', text: 'Payment Info' },
    { to: 'history', text: 'History' },
    { to: '/', text: 'Home' },
  ];

  const adminNavLinks = [
    { to: "admin-home", text: "Analytics" },
    { to: "upload-movie", text: "Upload Movie" },
    { to: "revenue", text: "Ad Revenue Tracking" },
    { to: "logs", text: "System Logs" },
    { to: "manage-subscription", text: "Manage Subscriptions" },
    { to: "modernization", text: "Moderation" },
    { to: "user-panel-list", text: "User Panel Lists" },
    { to: "user-feedback", text: "User Feedback" },
    { to: "admin/paymentHistory", text: "Payment History" },
  ];

  const [isAdmin, setAdmin] = useState(false);
  // const [isAdmin, SetAdmin] = useState(true);
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

      {/* Dashboard Sidebar */}
      <div
        className={`bg-zinc-800 px-4 w-72 h-screen fixed overflow-y-scroll pt-6 lg:pt-0 z-20 ${
          isSidebarOpen ? "block" : "hidden lg:block"
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

              <hr className="pb-8" />

              <div onClick={() => setAdmin(!isAdmin)} className="">
                {/* <FaBell size={22} /> */}
                <button
                  className="btn btn-sm"
                  title="Click to Check User Dash (Test)"
                >
                  Check User
                </button>
              </div>
            </div>

            <hr className="pb-8" />

            {/* ADMIN NAVIGATION */}
            <ul className="flex flex-col gap-2">
              {adminNavLinks.map((navLink, index) => (
                <li key={index} className="w-full">
                  {navLink.to === "forum" &&
                    index < adminNavLinks.length - 1 && <hr className="mt-5" />}

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "btn-active" : "sidebar-btn"
                    }
                    to={navLink?.to}
                    style={navLink?.to === "forum" ? { marginTop: "40px" } : {}}
                  >
                    {navLink?.text}
                  </NavLink>
                </li>
              ))}
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
              <>
                {" "}
                <Button onPress={onOpen} color="secondary">
                  <Badge color="danger" content={filters?.length} shape="circle">
                    <MdOutlineNotificationsActive
                      className="fill-current"
                      size={30}
                    />
                  </Badge>
                </Button>
              <NotificationModal filters={filters} onOpenChange={onOpenChange} isOpen={isOpen}/>
              </>

              <div onClick={() => setAdmin(!isAdmin)} className="">
                {/* <FaBell size={22} /> */}
                <button
                  className="btn btn-sm"
                  title="Click to Check Admin Dash (Test)"
                >
                  Check Admin
                </button>
              </div>
            </div>

            <hr className="pb-8" />

            {/* USER NAVIGATION */}
            <ul className="flex flex-col gap-2">
              {userNavLinks.map((navLink, index) => (
                <li key={index} className="w-full">
                  {navLink.to === "forum" &&
                    index < userNavLinks.length - 1 && <hr className="mt-5" />}

                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "btn-active" : "sidebar-btn"
                    }
                    to={navLink?.to}
                    style={navLink?.to === "forum" ? { marginTop: "40px" } : {}}
                  >
                    {navLink?.text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="group:mb-0 mt-auto">
              <NavLink to={"help"} className="sidebar-btn">
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
          isSidebarOpen ? "" : "blur-none"
        } min-h-screen w-full pt-6 lg:pt-0 lg:ml-72`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
