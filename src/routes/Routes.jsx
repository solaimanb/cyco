import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import LiveTv from "../pages/liveTv/LiveTv";
import Movies from "../pages/movies/Movies";
import Podcast from "../pages/podcast/Podcast";
import Series from "../pages/series/Series";
import Trailer from "../pages/trailer/Trailer";

const router = createBrowserRouter([
    {path: '/',
     element: <Root/>,
     children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/trailer",
            element: <Trailer/>,
        },
        {
            path: "/movies",
            element: <Movies/>,
        },
        {
            path: "/series",
            element: <Series/>,
        },
        {
            path: "/live-tv",
            element: <LiveTv/>,
        },
        {
            path: "/podcast",
            element: <Podcast/>,
        }
     ]
    }
])

export default router;
