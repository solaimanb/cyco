import { createBrowserRouter } from "react-router-dom";
import PlayerPage from "../components/trailerCard/PlayerPage";
import MoviePlayer from "../components/moviePlayer/MoviePlayer";
import SeriesParts from "../components/series/SeriesParts";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import Dashboard from "../layouts/Dashboard";
import Root from "../layouts/Root";
import Payments from "../pages/dashboard/admin/Payments/Payment";
import ManageEvents from "../pages/dashboard/admin/manageEvents/ManageEvents";
import ManageSubscription from "../pages/dashboard/admin/manageSubscription/ManageSubscription";
import AdminPaymentHistory from "../pages/dashboard/admin/paymentHistory/AdminPaymentHistory";
import UploadMovie from "../pages/dashboard/admin/uploadMovie/UploadMovie";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Downloads from "../pages/dashboard/user/downloads/Downloads";
import History from "../pages/dashboard/user/history/History";
import Recommendation from "../pages/dashboard/user/recommendation/Recommendation";
import Subscriptions from "../pages/dashboard/user/subscriptions/Subscriptions";
import ErrorPage from "../pages/Error/ErrorPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Revenue from "../pages/dashboard/admin/revenue/Revenue";
import SystemLogs from "../pages/dashboard/admin/systemLogs/SystemLogs";
import UserFeedback from "../pages/dashboard/admin/userFeedback/UserFeedback";
import UserPanel from "../pages/dashboard/admin/userPanel/UserPanel";
import UserDashboard from "../pages/dashboard/user/UserDashboard";
import Forum from "../pages/dashboard/user/forum/Forum";
import PaymentHistory from "../pages/dashboard/user/paymentHistory/PaymentHistory";
import UpdatePaymentInfo from "../pages/dashboard/user/paymentInfo/PaymentInfo";
import ProfileSettings from "../pages/dashboard/user/profileSettings/ProfileSettings";
import WatchLive from "../pages/dashboard/user/watch-party/Watch-live/WatchLive";
import WatchParty from "../pages/dashboard/user/watch-party/WatchParty";
import Wishlist from "../pages/dashboard/user/wishlist/WishList";
import { default as Help } from "../pages/help/Help";
import Home from "../pages/home/home/Home";
import PopularTvs from "../pages/home/popularTvs/PopularTvs";
import PopularTv from "../pages/home/popularTvs/popularTv";
import LiveTv from "../pages/liveTv/LiveTv";
import Login from "../pages/login/Login";
import Movies from "../pages/movies/Movies";
import Payment from "../pages/payment/Payment";
import Podcast from "../pages/podcast/Podcast";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
import Register from "../pages/register/Register";
import Series from "../pages/series/Series";
import TermsConditions from "../pages/terms/TermsConditions";
import Testimonials from "../pages/testimonials/Testimonials";
import Trailer from "../pages/trailer/Trailer";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../pages/dashboard/admin/AdminDashboard";
import LiveChannels from "../pages/dashboard/admin/liveChannels/LiveChannels";
import MovieInfo from "../pages/movies/movieInfo/MovieInfo";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'trailer',
        element: <Trailer />,
      },
      {
        path: 'trailer/:index',
        element: (
          <PrivateRoute>
            <PlayerPage />
          </PrivateRoute>
        ),
      },
      {
        path: 'movies',
        element: <Movies />,
      },
      {
        path: 'series',
        element: <Series />,
      },
      {
        path: 'series/seriesParts',
        element: (
          <PrivateRoute>
            <SeriesParts />
          </PrivateRoute>
        ),
      },
      {
        path: 'live-tv',
        element: <LiveTv />,
      },
      { path: 'podcast', element: <Podcast /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'checkout',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: 'video-player',
        element: (
          <PrivateRoute>
            <VideoPlayer />
          </PrivateRoute>
        ),
      },
      {
        path: 'movieinfo',
        element: <MovieInfo />,
      },
      {
        path: 'watch-video',
        element: (
          <PrivateRoute>
            <MoviePlayer />
          </PrivateRoute>
        ),
      },
      {
        path: 'popular-tvs',
        element: <PopularTvs />,
      },
      {
        path: 'popular-tv',
        element: <PopularTv />,
      },
      { path: 'PrivacyPolicy', element: <PrivacyPolicy /> },
      { path: 'TermsConditions', element: <TermsConditions /> },
      {
        path: 'testpayments',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      { path: 'testimonials', element: <Testimonials /> },
      {
        path: 'payment',
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      { path: 'help', element: <Help /> },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <DashboardHome /> },
      { path: 'admin-analytics', element: <AdminDashboard /> },
      { path: 'user-analytics', element: <UserDashboard /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'downloads', element: <Downloads /> },
      { path: 'subscriptions', element: <Subscriptions /> },
      { path: 'forum', element: <Forum /> },
      { path: 'watch-party', element: <WatchParty /> },
      { path: 'watch-party/watch-party-public', element: <WatchLive /> },
      { path: 'recommendation', element: <Recommendation /> },
      { path: 'admin/paymentHistory', element: <AdminPaymentHistory /> },
      { path: 'admin/manage-events', element: <ManageEvents /> },
      { path: 'payment-info', element: <UpdatePaymentInfo /> },
      { path: 'payment-history', element: <PaymentHistory /> },
      { path: 'settings', element: <ProfileSettings /> },
      { path: 'history', element: <History /> },
      { path: 'upload-movie', element: <UploadMovie /> },
      { path: 'revenue', element: <Revenue /> },
      { path: 'logs', element: <SystemLogs /> },
      { path: 'help', element: <Help /> },
      { path: 'admin/manage-subscription', element: <ManageSubscription /> },
      { path: 'user-panel', element: <UserPanel /> },
      { path: 'user-feedback', element: <UserFeedback /> },
      { path: 'payment', element: <Payments /> },
      { path: 'live-channels', element: <LiveChannels /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

export default router;