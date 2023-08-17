import React from 'react';
import Marquee from 'react-fast-marquee';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Subscription from '../../../components/subscription/Subscription';
import Title from '../../../components/title/Title';
import Tvs from '../../../components/tvs/Tvs';
import Categories from '../categories/Categories';
import FeaturedAds from '../featuredAds/FeaturedAds';
import FeaturedMovies from '../featuredMovies/featuredMovies';
import Hero from '../hero/Hero';
import MostRecent from '../mostRecent/MostRecent';
import TopPicks from '../topPicks/TopPicks';

const Home = () => {
  const cycoParticles = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={cycoParticles}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: {
              value: '#111',
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="min-h-screen">
        {/* Hero */}
        <Hero />

        {/* Featured Movies */}
        <div className="px-4 z-10 py-6 md:py-8 mt-[70%]">
          <h1 className="border-l-4 ps-3 text-white text-xl font-bold">
            Featured Movies
          </h1>
          <div className="bg-zinc-900 px-5">
            <Marquee speed={10}>
              <FeaturedMovies />
            </Marquee>
          </div>
        </div>

        {/* Live TV's */}
        <div>
          <Title title={'Popular TVs'} />
          <Tvs />
        </div>

        {/* Movies/Categories */}
        <div className="flex justify-between gap-3">
          <div className="">
            <div className="mt-20">
              <Title title={'Most Recent'} />
              <MostRecent />
            </div>
            <div className="mt-10">
              <Title title={'Top Picks'} />
              <TopPicks />
            </div>
          </div>
          <div className="mt-5 w-[30%] hidden md:block">
            <Title title={'Categories'} />
            <Categories />
          </div>
        </div>

        {/* Ads */}
        <FeaturedAds />

        {/* Subscription Plan/Tier*/}
        <Subscription />
      </div>
    </>
  );
};

export default Home;
