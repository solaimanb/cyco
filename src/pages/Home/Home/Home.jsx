
import React from 'react';
import FeaturedMovo from '../FeatureMarquee/FeaturedMovo';
import Marquee from 'react-fast-marquee';
import "./Home.css";
import Categories from '../Categories/Categories';
const Home = () => {
  return (
    <div className="bg-[#090909] min-h-screen ">
      <div className=" md:mx-12 lg:mx-24 bg-gray-800 px-4 md:px-10 py-6 md:py-12">
        <h1 className="text-white text-xl md:text-2xl font-bold">Featured Movies</h1>
        <Marquee>
          <FeaturedMovo />
        </Marquee>
      </div>
      <div className='grid-layout text-green-600 md:mx-12 lg:mx-24'>
        <div className='bg-[#090909]'>
          <h1>Movie card</h1>
        </div>
        <div className='bg-[#090909]'>
          {/* <h1>Category</h1> */}
          <Categories/>

        </div>
      </div>
    </div>
  );
};

export default Home;
