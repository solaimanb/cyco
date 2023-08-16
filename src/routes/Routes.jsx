import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home/Home';
import LiveTv from '../pages/liveTv/LiveTv';
import Login from '../pages/login/Login';
import Movies from '../pages/movies/Movies';
import Podcast from '../pages/podcast/Podcast';
import Register from '../pages/register/Register';
import SeriesParts from '../components/series/SeriesParts';
import ErrorPage from '../pages/Error/ErrorPage';
import Series from '../pages/series/Series';
import Trailer from '../pages/trailer/Trailer';
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";
import TermsConditions from "../pages/terms-conditions/TermsConditions";
import About from "../pages/About-Us/About";
import Payment from "../pages/Payment/Payment";
import Dashboard from '../layouts/Dashboard';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/trailer',
        element: <Trailer />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/series',
        element: <Series />,
      },
      {
        path: '/series/seriesParts',
        element: <SeriesParts />,
      },
      {
        path: '/live-tv',
        element: <LiveTv />,
      },
      {
        path: '/podcast',
        element: <Podcast />,
      },
      {
       path:'/PrivacyPolicy',
       element:<PrivacyPolicy/>
      },
      {
       path: '/TermsConditions',
       element: <TermsConditions/>
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
        path: '/login',
        element: <Login />,
      },
      // initial checked path,
      {
        path: "/chekout",
        element: <Payment/>
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'admin-home',
        element: <AdminHome />
      }
    ]
  }
]);

export default router;
