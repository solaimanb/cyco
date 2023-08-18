import { createBrowserRouter } from 'react-router-dom';
import SeriesParts from '../components/series/SeriesParts';
// import LiveTv from '../components/tvs/LiveTv';
import LiveVideo from '../components/tvs/LiveVideo';
import Tvs from '../components/tvs/Tvs';
import VideoPlayer from '../components/videoPlayer/VideoPlayer';
import Dashboard from '../layouts/Dashboard';
import Root from '../layouts/Root';
import AddNewMedia from '../pages/DashBoard/Admin/AddNewMedia';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';
import Payments from '../pages/DashBoard/Admin/Payments/Payment';
import UsersHome from '../pages/DashBoard/user/UsersHome';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home/Home';
import About from '../pages/about/About';
import Contacts from '../pages/contacts/Contacts';
import Action from '../pages/home/categories/action/Action';
import Animation from '../pages/home/categories/animation/Animation';
import Classic from '../pages/home/categories/classic/Classic';
import Comedy from '../pages/home/categories/comedy/Comedy';
import Documentary from '../pages/home/categories/documentary/Documentary';
import Drama from '../pages/home/categories/drama/Drama';
import Horror from '../pages/home/categories/horror/Horror';
import Romantic from '../pages/home/categories/romantic/Romantic';
import Science from '../pages/home/categories/science/Science';
import TvShows from '../pages/home/categories/tvShows/TvShows';
import LiveTv from '../pages/liveTv/LiveTv';
import Login from '../pages/login/Login';
import MovieInfo from '../pages/movie-info/MovieInfo';
import Movies from '../pages/movies/Movies';
import Payment from '../pages/payment/Payment';
import Podcast from '../pages/podcast/Podcast';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy';
import Register from '../pages/register/Register';
import Series from '../pages/series/Series';
import TermsConditions from '../pages/terms/TermsConditions';
import Trailer from '../pages/trailer/Trailer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'trailer', element: <Trailer /> },
      { path: 'movies', element: <Movies /> },
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
      { path: 'movieDetails', element: <MovieInfo /> },
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
      { path: '', element: <Home /> },
      { path: 'trailer', element: <Trailer /> },
      { path: 'movies', element: <Movies /> },
      { path: 'series/seriesDetails', element: <SeriesParts /> },
      { path: 'live-tv', element: <Tvs /> },
      {
        path: 'live-tv/live/:id',
        element: <LiveVideo />,
        loader: ({ params }) =>
          fetch('/tvData.json')
            .then((res) => res.json())
            .then((data) => data),
      },
      { path: 'podcast', element: <Podcast /> },
      { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
      { path: 'TermsConditions', element: <TermsConditions /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export default router;
