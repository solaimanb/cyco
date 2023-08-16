import { createBrowserRouter } from 'react-router-dom';
import SeriesParts from '../components/series/SeriesParts';
import Dashboard from '../layouts/Dashboard';
import Root from '../layouts/Root';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home/Home';
import Payment from "../pages/Payment/Payment";
import About from '../pages/about/About';
import LiveTv from '../pages/liveTv/LiveTv';
import Login from '../pages/login/Login';
import Movies from '../pages/movies/Movies';
import Podcast from '../pages/podcast/Podcast';
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";
import Register from '../pages/register/Register';
import Series from '../pages/series/Series';
import TermsConditions from "../pages/terms-conditions/TermsConditions";
import Trailer from '../pages/trailer/Trailer';

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
        path: "/about",
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
