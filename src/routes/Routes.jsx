import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";

import LiveTv from "../pages/liveTv/LiveTv";

import Login from "../pages/login/Login";
import Movies from "../pages/movies/Movies";
import Podcast from "../pages/podcast/Podcast";
import Register from "../pages/register/Register";

import Series from "../pages/series/Series";
import Trailer from "../pages/trailer/Trailer";
import SeriesCard from "../components/series/SeriesCard";
import SeriesDetails from "../components/series/SeriesDetails";
import ErrorPage from '../pages/Error/ErrorPage';
import About from "../pages/About-Us/About";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trailer",
        element: <Trailer />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <SeriesCard />,
      },
      {
        path: "/series/seriesDetails",
        element: <SeriesDetails/>,
        
      },
      {
        path: "/live-tv",
        element: <LiveTv />,
      },
      {
        path: "/podcast",
        element: <Podcast />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);


export default router;
