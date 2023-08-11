
import React from 'react';
import Marquee from 'react-fast-marquee';
import LiveTv from '../../../components/Live-tv/LiveTv';
import Title from '../../../components/Title/Title';
import Categories from '../Categories/Categories';
import FeaturedMovo from '../FeatureMarquee/FeaturedMovo';
import TopPicks from '../TopPicks/TopPicks';
import "./Home.css";
const Home = () => {
  return (
    <div className="bg-[#090909] min-h-screen ">
      <div className=" md:mx-12 lg:mx-24 bg-gray-800 px-4 md:px-10 py-6 md:py-12">
        <h1 className="text-white text-xl md:text-2xl font-bold">Featured Movies</h1>
        <Marquee>
          <FeaturedMovo />
        </Marquee>
      </div>
      <LiveTv/>
      <div className='grid-layout text-green-600 md:mx-12 lg:mx-24'>
        <div className='bg-[#090909]'>
         
          <div>
            <Title title={"Top Picks"} />
          <TopPicks/>
          </div>
          <div>
            <Title title={"Top Picks"} />
          <TopPicks/>
          </div>
        </div>
        <div className='bg-[#090909]'>
        <Title title={"Categoris"} />
          <Categories/>

        </div>
      </div>
    </div>
  );
};

export default Home;
