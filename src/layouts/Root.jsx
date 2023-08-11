import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className="bg-black w-full">
            <Navbar/>
            
            <div className="min-h-[calc(100vh-160px)]">
            <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;