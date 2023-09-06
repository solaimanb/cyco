import { createBrowserRouter } from 'react-router-dom';
import PlayerPage from '../components/TrailerCard/PlayerPage';
import Play from '../components/play/Play';
import SeriesParts from '../components/series/SeriesParts';
import VideoPlayer from '../components/videoPlayer/VideoPlayer';
import Dashboard from '../layouts/Dashboard';
import Root from '../layouts/Root';
import AdminHome from '../pages/DashBoard/Admin/AdminHome';
import Payments from '../pages/DashBoard/Admin/Payments/Payment';
import ManageSubscription from '../pages/DashBoard/Admin/manage-subscription/ManageSubscription';
import Modernization from '../pages/DashBoard/Admin/modernization/Modernization';
import SystemLogs from '../pages/DashBoard/Admin/system-logs/SystemLogs';
import UserFeedback from '../pages/DashBoard/Admin/user-feedback/UserFeedback';
import UserPannelList from '../pages/DashBoard/Admin/user-panel-lists/UserPannelList';
import UsersHome from '../pages/DashBoard/user/UsersHome';
import Downloads from '../pages/DashBoard/user/downloads/Downloads';
import History from '../pages/DashBoard/user/history/History';
import Recommendation from '../pages/DashBoard/user/recommendation/Recommendation';
import Subscriptions from '../pages/DashBoard/user/subscriptions/Subscriptions';
import WatchParty from '../pages/DashBoard/user/watch-party/WatchParty';
import ErrorPage from '../pages/Error/ErrorPage';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Revenue from '../pages/dashBoard/admin/revenue/Revenue';
import UploadMovie from '../pages/dashBoard/admin/uploadMovie/UploadMovie';
import Forum from '../pages/dashBoard/user/forum/Forum';
import PaymentHistory from '../pages/dashBoard/user/paymentHistory/PaymentHistory';
import UpdatePaymentInfo from '../pages/dashBoard/user/paymentInfo/PaymentInfo';
import ProfileSettings from '../pages/dashBoard/user/profileSettings/ProfileSettings';
import Wishlist from '../pages/dashBoard/user/wishlist/WishList';
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
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'downloads', element: <Downloads /> },
      { path: 'subscriptions', element: <Subscriptions /> },
      { path: 'forum', element: <Forum /> },
      { path: 'watch-party', element: <WatchParty /> },
      { path: 'recommendation', element: <Recommendation /> },
      { path: 'payment-info', element: <UpdatePaymentInfo /> },
      { path: 'payment-history', element: <PaymentHistory /> },
      { path: 'settings', element: <ProfileSettings /> },
      { path: 'history', element: <History /> },
      { path: 'upload-movie', element: <UploadMovie /> },
      { path: 'revenue', element: <Revenue /> },
      { path: 'logs', element: <SystemLogs /> },
      { path: 'subscription', element: <ManageSubscription /> },
      { path: 'modernization', element: <Modernization /> },
      { path: 'user-pannel-list', element: <UserPannelList /> },
      { path: 'user-feedback', element: <UserFeedback /> },
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
