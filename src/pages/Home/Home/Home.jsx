import React from 'react';
import Marquee from 'react-fast-marquee';
import Title from '../../../components/Title/Title';
import Categories from '../Categories/Categories';
import TopPicks from '../TopPicks/TopPicks';
import FeaturedMovies from '../featuredMovies/featuredMovies';
import './Home.css';
const Home = () => {
  return (
    <div className="bg-[#090909] min-h-screen ">
      <div className="md:mx-12 lg:mx-24 px-4 md:px-10 py-6 md:py-8">
        <h1 className="border-l-4 ps-3 text-white text-xl font-bold">
          Featured Movies
        </h1>
        <div className="bg-gray-800 px-5 mt-5">
          <Marquee
          speed={20}
          >
            <FeaturedMovies />
          </Marquee>
        </div>
      </div>
      {/* <LiveTv /> */}
      <div className="grid-layout text-green-600 md:mx-12 lg:mx-24">
        <div className="bg-[#090909]">
          <div>
            <Title title={'Top Picks'} />
            <TopPicks />
          </div>
          <div>
            <Title title={'Top Picks'} />
            <TopPicks />
          </div>
        </div>
        <div className="bg-[#090909]">
          <Title title={'Categoris'} />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Home;
