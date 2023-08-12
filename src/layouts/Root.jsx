import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/shared/Navbar/Navbar";
import Footer from "../pages/Home/shared/Footer/Footer";
import Subscription from "../components/Subscription/Subscription";


const Root = () => {
    return (
        <div className="bg-black w-full">
            <Navbar/>
        
            <div className="min-h-[calc(100vh-160px)]">
            <Outlet/>
            </div>
            <Subscription/>
            <Footer/>
        </div>
    );
};

export default Root;