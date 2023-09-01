import { createBrowserRouter } from 'react-router-dom';
import PlayerPage from '../components/TrailerCard/PlayerPage';
import Play from '../components/play/Play';
import SeriesParts from '../components/series/SeriesParts';
import VideoPlayer from '../components/videoPlayer/VideoPlayer';
import Dashboard from '../layouts/Dashboard';
import Root from '../layouts/Root';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';
import Payments from '../pages/DashBoard/Admin/Payments/Payment';
import AddMedia from '../pages/DashBoard/Admin/addNewMedia/AddMedia';
import ManageSubscription from '../pages/DashBoard/Admin/manage-subscription/ManageSubscription';
import Modernization from '../pages/DashBoard/Admin/modernization/Modernization';
import RevenueTracking from '../pages/DashBoard/Admin/revenue-tracking/RevenueTracking';
import SystemLogs from '../pages/DashBoard/Admin/system-logs/SystemLogs';
import UploadNewMovies from '../pages/DashBoard/Admin/upload-new-movie/UploadNewMovies';
import UserFeedback from '../pages/DashBoard/Admin/user-feedback/UserFeedback';
import UserPannelList from '../pages/DashBoard/Admin/user-panel-lists/UserPannelList';
import UsersHome from '../pages/DashBoard/user/UsersHome';
import Downloads from '../pages/DashBoard/user/downloads/Downloads';
import Forum from '../pages/DashBoard/user/forum/Forum';
import History from '../pages/DashBoard/user/history/History';
import WatchList from '../pages/DashBoard/user/my-watchlist/WatchList';
import PaymentHistory from '../pages/DashBoard/user/payment-history/PaymentHistory';
import ProfileSettings from '../pages/DashBoard/user/profile-settings/ProfileSettings';
import Recommendation from '../pages/DashBoard/user/recommendation/Recommendation';
import Subscriptions from '../pages/DashBoard/user/subscriptions/Subscriptions';
import UpdatePaymentInfo from '../pages/DashBoard/user/update-Payment-info/UpdatePaymentInfo';
import WatchParty from '../pages/DashBoard/user/watch-party/WatchParty';
import ErrorPage from '../pages/Error/ErrorPage';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import FaqPage from '../pages/faq/FaqPage';
import Home from '../pages/home/home/Home';
import PopularTvs from '../pages/home/popularTvs/PopularTvs';
import PopularTv from '../pages/home/popularTvs/popularTv';
import LiveTv from '../pages/liveTv/LiveTv';
import Login from '../pages/login/Login';
import Movies from '../pages/movies/Movies';
import MovieInfo from '../pages/movies/movieInfo/MovieInfo';
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
      { path: 'video-player', element: <VideoPlayer /> },
      { path: 'movieinfo', element: <MovieInfo /> },
      { path: 'watch-video', element: <Play /> },
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
      { path: 'watchList', element: <WatchList /> },
      { path: 'downloads', element: <Downloads /> },
      { path: 'subscriptions', element: <Subscriptions /> },
      { path: 'forum', element: <Forum /> },
      { path: 'watch-party', element: <WatchParty /> },
      { path: 'recommendation', element: <Recommendation /> },
      { path: 'update-payment-info', element: <UpdatePaymentInfo /> },
      { path: 'payment-history', element: <PaymentHistory /> },
      { path: 'account-settings', element: <ProfileSettings /> },
      { path: 'history', element: <History /> },

      { path: 'upload-new-movie', element: <UploadNewMovies /> },
      { path: 'revenue-tracking', element: <RevenueTracking /> },
      { path: 'system-logs', element: <SystemLogs /> },

      { path: 'manage-subscription', element: <ManageSubscription /> },
      { path: 'modernization', element: <Modernization /> },
      { path: 'user-pannel-list', element: <UserPannelList /> },
      { path: 'user-feedback', element: <UserFeedback /> },

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
