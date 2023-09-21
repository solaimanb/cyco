import { createBrowserRouter } from "react-router-dom";
import PlayerPage from "../components/TrailerCard/PlayerPage";
import MoviePlayer from "../components/moviePlayer/MoviePlayer";
import SeriesParts from "../components/series/SeriesParts";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import Dashboard from "../layouts/Dashboard";
import Root from "../layouts/Root";
import Payments from "../pages/DashBoard/Admin/Payments/Payment";
import AdminPaymentHistory from "../pages/DashBoard/Admin/paymentHistory/AdminPaymentHistory";
import UploadMovie from "../pages/DashBoard/Admin/uploadMovie/UploadMovie";
import Downloads from "../pages/DashBoard/user/downloads/Downloads";
import History from "../pages/DashBoard/user/history/History";
import Recommendation from "../pages/DashBoard/user/recommendation/Recommendation";
import Subscriptions from "../pages/DashBoard/user/subscriptions/Subscriptions";
import ErrorPage from "../pages/Error/ErrorPage";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import AdminDashboard from "../pages/dashBoard/admin/AdminDashboard";
import Revenue from "../pages/dashBoard/admin/revenue/Revenue";
import SystemLogs from "../pages/dashBoard/admin/systemLogs/SystemLogs";
import UserFeedback from "../pages/dashBoard/admin/userFeedback/UserFeedback";
import UserPanel from "../pages/dashBoard/admin/userPanel/UserPanel";
import UserDashboard from "../pages/dashBoard/user/UserDashboard";
import Forum from "../pages/dashBoard/user/forum/Forum";
import PaymentHistory from "../pages/dashBoard/user/paymentHistory/PaymentHistory";
import UpdatePaymentInfo from "../pages/dashBoard/user/paymentInfo/PaymentInfo";
import ProfileSettings from "../pages/dashBoard/user/profileSettings/ProfileSettings";
import WatchLive from "../pages/dashBoard/user/watch-party/Watch-live/WatchLive";
import WatchParty from "../pages/dashBoard/user/watch-party/WatchParty";
import Wishlist from "../pages/dashBoard/user/wishlist/WishList";
import { default as Help } from "../pages/help/Help";
import Home from "../pages/home/home/Home";
import PopularTvs from "../pages/home/popularTvs/PopularTvs";
import PopularTv from "../pages/home/popularTvs/popularTv";
import LiveTv from "../pages/liveTv/LiveTv";
import Login from "../pages/login/Login";
import Movies from "../pages/movies/Movies";
import MovieInfo from "../pages/movies/movieInfo/MovieInfo";
import LiveChannels from "../pages/dashBoard/admin/liveChannels/LiveChannels";
import Payment from "../pages/payment/Payment";
import Podcast from "../pages/podcast/Podcast";
import PrivacyPolicy from "../pages/policy/PrivacyPolicy";
import Register from "../pages/register/Register";
import Series from "../pages/series/Series";
import TermsConditions from "../pages/terms/TermsConditions";
import Testimonials from "../pages/testimonials/Testimonials";
import Trailer from "../pages/trailer/Trailer";
import ManageSubscription from "../pages/DashBoard/Admin/manageSubscription/ManageSubscription";
import PrivateRoute from "./PrivateRoute";
import ManageEvents from "../pages/DashBoard/Admin/manageEvents/ManageEvents";
import DashboardHome from "../pages/DashBoard/DashboardHome";

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
      {path: "", element: <DashboardHome/>},
      { path: "admin-analytics", element: <AdminDashboard /> },
      { path: "user-analytics", element: <UserDashboard /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "downloads", element: <Downloads /> },
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "forum", element: <Forum /> },
      { path: "watch-party", element: <WatchParty /> },
      { path: "watch-party/watch-party-public", element: <WatchLive /> },
      { path: "recommendation", element: <Recommendation /> },
      { path: "admin/paymentHistory", element: <AdminPaymentHistory /> },
      { path: "admin/manage-events", element: <ManageEvents /> },
      { path: "payment-info", element: <UpdatePaymentInfo /> },
      { path: "payment-history", element: <PaymentHistory /> },
      { path: "settings", element: <ProfileSettings /> },
      { path: "history", element: <History /> },
      { path: "upload-movie", element: <UploadMovie /> },
      { path: "revenue", element: <Revenue /> },
      { path: "logs", element: <SystemLogs /> },
      { path: "help", element: <Help /> },
      { path: "admin/manage-subscription", element: <ManageSubscription /> },
      { path: "user-panel", element: <UserPanel /> },
      { path: "user-feedback", element: <UserFeedback /> },
      { path: "payment", element: <Payments /> },
      { path: "live-channels", element: <LiveChannels /> },
    ],
  },
  { path: '*', element: <ErrorPage /> },
]);

export default router;
