import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';


const Root = () => {
  return (
    <div className="w-full mx-auto">
      <Navbar />

      {/* <div className="min-h-[calc(100vh-160px)]"> */}
      <div className="">
        <div className="mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
