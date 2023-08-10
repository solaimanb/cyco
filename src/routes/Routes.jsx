import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {path: '/',
     element: <Root/>,
     children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/trailor",
            element: <Home/>,
        },
        {
            path: "/movie",
            element: <Home/>,
        },
        {
            path: "/series",
            element: <Home/>,
        },
        {
            path: "/tv",
            element: <Home/>,
        },
        {
            path: "/podcast",
            element: <Home/>,
        }
     ]
    }
])

export default router;
