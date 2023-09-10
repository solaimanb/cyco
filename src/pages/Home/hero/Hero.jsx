import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import useMovies from '../../../hooks/useMovies';

const Hero = () => {
  const [movies] = useMovies();
  // console.log(movies);

  const handleWatchMovie = () => {
    console.log('watch movie');
  };

  return (
    <section className="w-[100%] absolute top-10 md:top-0 left-0">
      <Swiper
        pagination={{
          type: 'progressbar',
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
              className="hero h-[300px] md:h-[500px] lg:h-[600px] xl:min-h-screen"
              style={{ backgroundImage: `url(${movie?.Thumbnail})` }}
            >
              <div className="backdrop-blur-sm backdrop-opacity-50 h-full py-5 flex justify-center md:justify-normal md:pl-40 text-start items-center w-full text-white">
                <div className="max-w-xs md:max-w-lg justify-center">
                  <h1 className="mb-5 text-xl text-white md:text-3xl xl:text-5xl 2xl:text-6xl font-bold w-full">
                    {movie?.Title}
                  </h1>
                  <p className="mb-5 text-white text-xs md:text-sm lg:text-base xl:text-lg text-justify">
                    {movie?.Plot}
                  </p>
                  <div className="flex gap-5"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="z-10 absolute h-[100%] inset-0 w-[100%] backdrop-brightness-70 top-0 left-0"></div>
    </section>
  );
};

export default Hero;
