import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  const user = true;
  // const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleLogOut = () => {
  //   logOut()
  //     .then()
  //     .catch((error) => console.log(error));
  // };
  return (
    <div className="">
      <div className="relative ">
        <div className="gray-800 hidden px-44 text-white  lg:flex items-center justify-between py-2">
          <Link to="/">
            {/* <img src={logo} alt="" className="w-44" /> */}
            <h3 className="">CyCo</h3>
          </Link>

          <ul className="nav-ul items-center hidden  lg:flex font-bold md:mx-20">
            <li>
              <NavLink
                id="nav"
                to="/"
                aria-label="home"
                title="Home"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/trailor"
                aria-label="Trailor"
                title="Trailor"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Trailor
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/movie"
                aria-label="Movie"
                title="Movie"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/series"
                aria-label="Series"
                title="Series"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/tv"
                aria-label="Live TV"
                title="Live TV"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Live TV
              </NavLink>
            </li>
            <li>
              <NavLink
                id="nav"
                to="/podcast"
                aria-label="Podcast"
                title="Podcast"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Podcast
              </NavLink>
            </li>

            {/* <li className="ml-8">
              <DarkLight />
            </li> */}
          </ul>
          <li className="flex items-center">
            {user ? (
              <>
                {/* <NavLink
                    id="nav"
                    to="/dashboard "
                    aria-label="Dashboard "
                    title="Dashboard "
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink> */}
                <button id="nav" className="">
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                id="nav"
                to="/login"
                aria-label="login"
                title="Login"
                className={({ isActive }) => (isActive ? 'active' : 'default')}
              >
                Login
              </NavLink>
            )}
          </li>
        </div>

        {/* Responsive small device */}

        <div className="flex items-center justify-between lg:hidden py-5 px-10">
          <div>
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
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
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="ToyTown"
                      title="ToyTown"
                      className="inline-flex items-center"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-200">
                        {/* <img
                          src={logo}
                          alt=""
                          className="flex-shrink-0 w-5 h-5 rounded-full "
                        /> */}
                        <h3 className="flex-shrink-0 w-5 h-5 rounded-full ">
                          CyCo
                        </h3>
                      </div>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        CyCo TV
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/trailor"
                        aria-label="Trailor"
                        title="Trailor"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Trailor
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/movie"
                        aria-label="Movie"
                        title="Movie"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Movie
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/series"
                        aria-label="Series"
                        title="Series"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Series
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/login"
                        aria-label="Login"
                        title="Login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

          <div>
            <h2 className='font-bold'>CYCO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
