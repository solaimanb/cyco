import { createBrowserRouter } from 'react-router-dom';
import PlayerPage from '../components/TrailerCard/PlayerPage';
import SeriesParts from '../components/series/SeriesParts';
import VideoPlayer from '../components/videoPlayer/VideoPlayer';
import Dashboard from '../layouts/Dashboard';
import Root from '../layouts/Root';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';
import Payments from '../pages/DashBoard/Admin/Payments/Payment';
import AddMedia from '../pages/DashBoard/Admin/addNewMedia/AddMedia';
import UsersHome from '../pages/DashBoard/user/UsersHome';
import MyPackage from '../pages/DashBoard/user/my-package/MyPackage';
import Watchlist from '../pages/DashBoard/user/my-watchlist/Watchlist';
import PaymentHistory from '../pages/DashBoard/user/payment-history/PaymentHistory';
import ProfileSettings from '../pages/DashBoard/user/profile-settings/ProfileSettings';
import TryPremium from '../pages/DashBoard/user/try-premium/TryPremium';
import ErrorPage from '../pages/Error/ErrorPage';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import FaqPage from '../pages/faq/FaqPage';
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
import Home from '../pages/home/home/Home';
import PopularTvs from '../pages/home/popularTvs/PopularTvs';
import PopularTv from '../pages/home/popularTvs/popularTv';
import LiveTv from '../pages/liveTv/LiveTv';
import Login from '../pages/login/Login';
import MovieInfo from '../pages/movieInfo/MovieInfo';
import Movies from '../pages/movies/Movies';
import Payment from '../pages/payment/Payment';
import Podcast from '../pages/podcast/Podcast';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy';
import Register from '../pages/register/Register';
import Series from '../pages/series/Series';
import TermsConditions from '../pages/terms/TermsConditions';
import Testimonials from '../pages/testimonials/Testimonials';
import Trailer from '../pages/trailer/Trailer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'trailer', element: <Trailer /> },
      { path: 'trailer/:index', element: <PlayerPage /> },
      { path: 'movies', element: <Movies /> },
      { path: 'series', element: <Series /> },
      { path: 'series/seriesParts', element: <SeriesParts /> },
      { path: 'live-tv', element: <LiveTv /> },
      { path: 'podcast', element: <Podcast /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
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
      { path: 'movieInfo', element: <MovieInfo /> },
      { path: 'popular-tvs', element: <PopularTvs /> },
      { path: 'popular-tv', element: <PopularTv /> },
      { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
      { path: 'TermsConditions', element: <TermsConditions /> },
      { path: 'testpayments', element: <Payment /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'payment', element: <Payment /> },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <AdminHome /> },
      { path: 'users-home', element: <UsersHome /> },
      { path: 'watchlist', element: <Watchlist /> },
      { path: 'try-premium', element: <TryPremium /> },
      { path: 'my-package', element: <MyPackage /> },
      { path: 'payment-history', element: <PaymentHistory /> },
      { path: 'account-settings', element: <ProfileSettings /> },

      { path: 'add-new-media', element: <AddMedia /> },
      { path: 'payment', element: <Payments /> },
      // {
      //   path: 'live-tv/live/:id',
      //   element: <LiveVideo />,
      //   loader: ({ params }) =>
      //     fetch('/tvData.json')
      //       .then((res) => res.json())
      //       .then((data) => data),
      // },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

export default router;
