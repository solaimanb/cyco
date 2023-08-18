import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home/Home/Home';

import Login from '../pages/login/Login';
import Movies from '../pages/movies/Movies';
import Podcast from '../pages/podcast/Podcast';
import Register from '../pages/register/Register';

import SeriesCard from '../components/series/SeriesCard';
import SeriesDetails from '../components/series/SeriesDetails';
import LiveTv from '../components/tvs/LiveTv';
import LiveVideo from '../components/tvs/LiveVideo';
import Tvs from '../components/tvs/Tvs';
import ErrorPage from '../pages/Error/ErrorPage';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import Series from '../pages/series/Series';
import TermsConditions from '../pages/terms-conditions/TermsConditions';
import Trailer from '../pages/trailer/Trailer';

const router = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'trailer', element: <Trailer /> },
      { path: 'movies', element: <Movies /> },
      { path: 'movieDetails', element: <MovieInfo /> },
      { path: 'series', element: <Series /> },
      { path: 'series/seriesParts', element: <SeriesParts /> },
      { path: 'live-tv', element: <LiveTv /> },
      { path: 'podcast', element: <Podcast /> },
      { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
      { path: 'TermsConditions', element: <TermsConditions /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contacts /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'checkout', element: <Payment /> },
      { path: 'action-movies', element: <Action /> },
      { path: 'comedy-movies', element: <Comedy /> },
      { path: 'drama-movies', element: <Drama /> },
      { path: 'science-movies', element: <Science /> },
      { path: 'horror-movies', element: <Horror /> },
      { path: 'animated-movies', element: <Animation /> },
      { path: 'romantic-movies', element: <Romantic /> },
      { path: 'documentary-movies', element: <Documentary /> },
      { path: 'tv-shows', element: <TvShows /> },
      { path: 'classic-movies', element: <Classic /> },
      { path: 'video-player', element: <VideoPlayer /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: 'admin-home', element: <AdminHome /> },
      { path: 'users-home', element: <UsersHome /> },
      { path: 'add-new-media', element: <AddNewMedia /> },
      { path: 'payments', element: <Payments /> },
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
        element: <SeriesCard />,
      },
      {
        path: '/series/seriesDetails',
        element: <SeriesDetails />,
      },
      {
        path: '/live-tv',
        element: <Tvs />,
      },
      {
        path: '/live-tv/live/:id',
        element: <LiveVideo />,
        loader: ({ params }) =>
          fetch('/tvData.json')
            .then((res) => res.json())
            .then((data) => data),
      },
      {
        path: '/podcast',

        element: <Podcast />,
      },
      {
        path: '/PrivacyPolicy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/TermsConditions',
        element: <TermsConditions />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
