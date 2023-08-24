import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="sticky z-50 top-0 backdrop-blur-lg md:backdrop-blur-2xl w-full">
      <div className="">
        {/* Responsive wide screen device */}
        <div className="gray-800 hidden px-24 mx-auto text-white lg:flex items-center justify-between py-5">
          <Link to="/">
            <h3 className="font-bold text-2xl">CYCO</h3>
          </Link>

          <ul className="nav-ul items-center hidden lg:flex font-bold md:mx-20 text-sm lg:text-base">
            <li>
              <NavLink
                id="nav"
                to="/"
                aria-label="home"
                title="Home"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/trailer"
                aria-label="Trailer"
                title="Trailer"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                Trailer
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/movies"
                aria-label="Movies"
                title="Movies"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/series"
                aria-label="Series"
                title="Series"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/live-tv"
                aria-label="Live TV"
                title="Live TV"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                LiveTV
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/about"
                aria-label="about"
                title="About Us"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/contact"
                aria-label="contact"
                title="About Us"
                className={({ isActive }) =>
                  isActive ? 'bg-cyred' : 'default'
                }
              >
                Contact US
              </NavLink>
            </li>
          </ul>
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
        </div>

        {/* Responsive small device */}
        <div className="flex items-center justify-between lg:hidden py-3 lg:my-5 px-5">
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
          {isMenuOpen && (
            <div className="absolute z-10 top-0 left-0 w-full">
              <div className="py-5 bg-cyred text-white shadow-sm">
                <div className="flex flex-row-reverse items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="ToyTown"
                      title="ToyTown"
                      className="inline-flex items-center"
                    >
                      <div className="">
                        {/* <img
                          src={logo}
                          alt=""
                          className="flex-shrink-0 w-5 h-5 rounded-full "
                        /> */}
                        {/* <h3 className="">CYCO</h3> */}
                      </div>
                      {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        CyCo TV
                      </span> */}
                    </Link>
                  </div>
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
                </div>

                <nav>
                  <ul className="space-y-4 mt-10 ml-5">
                    <li className="">
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="">
                      <Link
                        to="/trailer"
                        aria-label="Trailer"
                        title="Trailer"
                        className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                      >
                        Trailer
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/movies"
                        aria-label="Movies"
                        title="Movies"
                        className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                      >
                        Movies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/series"
                        aria-label="Series"
                        title="Series"
                        className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                      >
                        Series
                      </Link>
                    </li>

                    <li>
                      {user ? (
                        <>
                          <Link
                            id="nav"
                            to="/dashboard "
                            aria-label="Dashboard "
                            title="Dashboard "
                            // className={({ isActive }) =>
                            //   isActive ? 'active' : 'default'
                            // }
                            className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                          >
                            Dashboard
                          </Link>
                          <button onClick={handleLogOut} id="nav" className="">
                            Logout
                          </button>
                        </>
                      ) : (
                        <Link
                          id="nav"
                          to="/login"
                          aria-label="login"
                          title="Login"
                          className="tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-cyred font-bold pr-[100%] py-2 pl-1"
                          // className={({ isActive }) =>
                          //   isActive ? 'bg-cyred' : 'default'
                          // }
                        >
                          Login
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-white font-bold text-lg">CYCO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
