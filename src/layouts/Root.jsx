import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar/Navbar";
import Footer from "../pages/Home/shared/Footer/Footer";

const Root = () => {
    return (
        <div className="bg-gray-800 w-full">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;