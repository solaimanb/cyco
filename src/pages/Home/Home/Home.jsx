import React from 'react';
import Marquee from 'react-fast-marquee';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Loading from '../../../components/loading/Loading';
import Subscription from '../../../components/subscription/Subscription';
import Title from '../../../components/title/Title';
import useMovies from '../../../hooks/useMovies';
import Categories from '../categories/Categories';
import FeaturedAds from '../featuredAds/FeaturedAds';
import FeaturedMovies from '../featuredMovies/featuredMovies';
import Hero from '../hero/Hero';
import MostRecent from '../mostRecent/MostRecent';
import PopularTvs from '../popularTvs/PopularTvs';
import TopPicks from '../topPicks/TopPicks';

const Home = () => {
  const [loading] = useMovies();

  const cycoParticles = async (engine) => {
    await loadSlim(engine);

    if (loading) {
      return <Loading />;
    }
  };

  return (
    <>
      <Particles
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

        {/* Popular TVs */}
        <div>
          <Title title={'Popular TVs'} />
          <PopularTvs />
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

        {/* Subscription Plan/Tier */}
        <Subscription />
      </div>
    </>
  );
};

export default Home;
