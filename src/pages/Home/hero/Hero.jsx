import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useMovies from "../../../hooks/useMovies";

const Hero = () => {
  const [movies] = useMovies();
  console.log(movies);

  return (
    <section className="w-[100%] absolute top-10 md:top-0 left-0">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-screen"
              style={{ backgroundImage: `url(${movie?.Thumbnail})` }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className=" text-center text-neutral-content relative w-full">
                <div className="lg:left-5 lg:top-5 absolute bottom-0 right-0 max-w-lg font-mono">
                  <h1 className="mb-5 text-5xl font-bold w-full">
                    {movie?.Title}
                  </h1>
                  <p className="mb-5 ">{movie?.Plot}</p>
                  <div className="flex gap-5 justify-center">
                    <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500">
                      Watch movie
                    </button>
                    <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500">
                      Add WatchList
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="z-10 absolute h-full inset-0 w-[100%] backdrop-brightness-75 top-0 left-0"></div>
    </section>
  );
};

export default Hero;

/* <div className="absolute -mt-[50%] w-[40%] text-white">
        <h2 className="text-4xl font-bold ">Snow White & The Hunstman</h2>

        <p className="text-sm font-thin">
          The Queen sends her men, led by a local huntsman, to bring her back.
          But upon her capture, the huntsman finds he's being played and turns
          against the Queen's men, saving Snow White in the process. Meanwhile,
          Snow's childhood friend, William, learns that she is alive and sets
          off to save her.—G.C. Bendixen
        </p>

        <div className="flex mt-5 gap-2">
          <button className="btn btn-sm bg-[#800000]">Watch Now</button>
          <button className="btn btn-sm border-2 border-[#800000]">
            Add to Watchlist
          </button>
        </div>
      </div> */

import React from "react";
