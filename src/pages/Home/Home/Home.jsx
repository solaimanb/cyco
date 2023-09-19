import React from 'react';
import Marquee from 'react-fast-marquee';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import Loading from '../../../components/loading/Loading';
import Subscription from '../../../components/subscription/Subscription';
import Title from '../../../components/title/Title';
import useMovies from '../../../hooks/useMovies';
import Testimonials from '../../testimonials/Testimonials';
import Categories from '../categories/Categories';
import FeaturedAd from '../featuredAd/FeaturedAd';
import FeaturedMovies from '../featuredMovies/FeaturedMovies';
import Hero from '../hero/Hero';
import MovieSlot from '../movieSlot/MovieSlot';
import PopularTvs from '../popularTvs/PopularTvs';

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
                enable: false,
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
              value: '#800000',
            },
            links: {
              color: '#800000',
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 2,
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
          detectRetina: false,
        }}
      />

      <main className="min-h-screen py-10">
        {/* Hero */}
        <Hero />

        <div className="custom-container">
          {/* Featured Movies */}
          <div className="z-10 py-6 md:py-8">
            <Title title={'Featured Movies'} />
            <Marquee speed={10}>
              <FeaturedMovies />
            </Marquee>
          </div>

          {/* Popular TVs */}
          <div className="mt-10">
            <Title title={'Popular TVs'} />
            <PopularTvs />
          </div>

          {/* Movies/Categories */}
          <div className="lg:flex justify-between gap-5 mt-10">
            <div className="lg:w-[85%]">
              <div className="mt-10">
                <Title title={'Most Recent'} />
                <MovieSlot />
                {/* Category wise movies will show hereby */}
              </div>
            </div>
            <div className="mt-5 lg:w-[15%] hidden lg:block">
              <Title title={'Categories'} />
              <Categories />
            </div>
          </div>

          {/* Ads */}
          <FeaturedAd />

          {/* Subscription Plan/Tier */}
          <div className="my-14  text-white text-center">
            <h1 className="text-4xl font-bold">Tier Plan</h1>
            <p>Join the whitelist your perfect option below</p>
          </div>
          <Subscription />

          {/* testimonials */}
          <Testimonials />
        </div>
      </main>
    </>
  );
};

export default Home;
