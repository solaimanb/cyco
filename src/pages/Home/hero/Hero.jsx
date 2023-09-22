import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from 'swiper/modules';

import CanvasAnimation from '../../../components/canvas/CanvasAnimation ';
import useMovies from '../../../hooks/useMovies';

const Hero = () => {
  const [movies] = useMovies();

  return (
    
      <section className="relative h-[70vh] md:h-[85vh] lg:h-screen xl:h-[90vh] 2xl:pt-28 overflow-hidden bg-black/60  m-0 p-0">
        {/* keep the CanvasAnimation under this section do not change this again */}
        <CanvasAnimation>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1.7 : 2.2}
          coverflowEffect={{
            rotate: -45,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {movies?.slice(0, 12)?.map((movie, index) => (
            <SwiperSlide key={index}>
              <img src={movie?.Thumbnail} alt="featured-image" className="" />
              <h1 className="text-lg md:text-2xl text-zinc-300 text-center font-bold italic">
                {movie?.Title}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </CanvasAnimation>
    </section>
  );
};

export default Hero;
