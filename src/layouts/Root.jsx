import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const Root = () => {
  return (
    <div className="w-full container mx-auto">
      <Navbar />

      <div className="min-h-[calc(100vh-160px)]">
        <div className="w-[95%] mx-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
