import React from 'react';
import Marquee from 'react-fast-marquee';
import Title from '../../../components/Title/Title';
import Categories from '../Categories/Categories';
import FeaturedAds from '../featuredAds/FeaturedAds';
import FeaturedMovies from '../featuredMovies/featuredMovies';
import MostRecent from '../mostRecent/MostRecent';
import TopPicks from '../topPicks/TopPicks';
const Home = () => {
  return (
    <div className="bg-[#090909] min-h-screen">
      <div className="px-4 md:px-10 py-6 md:py-8">
        <h1 className="border-l-4 ps-3 text-white text-xl font-bold">
          Featured Movies
        </h1>
        <div className="bg-gray-800 px-5 mt-5">
          <Marquee speed={20}>
            <FeaturedMovies />
          </Marquee>
        </div>
      </div>
      {/* <LiveTv /> */}
      <div className="flex justify-between gap-3 text-green-600 mx-5 md:mx-12 lg:mx-24">
        <div className="bg-[#090909]">
          <div className="mt-10">
            <Title title={'Most Recent'} />
            <MostRecent />
          </div>
          <div className="mt-20">
            <Title title={'Top Picks'} />
            <TopPicks />
          </div>
        </div>
        <div className="bg-[#090909] mt-5 w-[30%] hidden md:block">
          <Title title={'Categories'} />
          <Categories />
        </div>
      </div>

      {/* Ads */}
      <FeaturedAds/>
    </div>
  );
};

export default Home;
