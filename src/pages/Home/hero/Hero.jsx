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

const Hero = () => {
  // const [movies] = useMovies();
  const movies = [
    {
      Thumbnail:
        'https://1.bp.blogspot.com/-WcCXxvbic7w/YVApHdxxw0I/AAAAAAAAKzw/gaaxBC6yMRwyIw_oRz5oQFS75CAqyLd5ACPcBGAsYHg/w919/dune-2021-movie-4k-uhdpaper.com-117.0_c-thumbnail.jpg',
      Title: 'Dune',
    },
    {
      Thumbnail:
        'https://w0.peakpx.com/wallpaper/289/41/HD-wallpaper-dwayne-johnson-jungle-cruise.jpg',
      Title: 'Jungle Cruise',
    },
    {
      Thumbnail:
        'https://w0.peakpx.com/wallpaper/621/220/HD-wallpaper-mortal-engines-2018-promo-poster-hera-hilmar-hester-shaw-hera-hilmarsdottir-icelandic-actress.jpg',
      Title: 'Mortal Engines',
    },
    {
      Thumbnail:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Featured-Black-Panther-Poster-Hidden-Details.jpg?q=50&fit=contain&w=943&h=&dpr=1.5',
      Title: 'Black Panther',
    },
    {
      Thumbnail:
        'https://w0.peakpx.com/wallpaper/212/572/HD-wallpaper-evil-dead-rise-movie-poster-2023.jpg',
      Title: 'Evil Dead Rise',
    },
    {
      Thumbnail:
        'https://w0.peakpx.com/wallpaper/289/913/HD-wallpaper-movie-inception-ellen-page-joseph-gordon-levitt-leonardo-dicaprio-tom-hardy-thumbnail.jpg',
      Title: 'Inception',
    },
    {
      Thumbnail:
        'https://e1.pxfuel.com/desktop-wallpaper/976/295/desktop-wallpaper-best-6-boyhood-on-hip-boyhood-thumbnail.jpg',
      Title: 'Boyhood',
    },
    {
      Thumbnail:
        'https://www.superherohype.com/wp-content/uploads/sites/4/2022/05/moon-knight-poster-featured.jpg',
      Title: 'Moon Knight',
    },
    {
      Thumbnail:
        'https://dapsmagic.com/wp-content/uploads/2023/03/Haunted-Mansion-Featured-Image-1-1-1024x576.jpg?ezimgfmt=ngcb2/notWebP',
      Title: 'Haunted Mansion',
    },
  ];

  return (
    <CanvasAnimation>
      <section className="relative h-[70vh] md:h-[85vh] lg:h-screen xl:h-[90vh] pt-10 xl:pt-28 overflow-hidden bg-black/60  m-0 p-0">
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
          {movies?.map((movie, index) => (
            <SwiperSlide key={index}>
              <img src={movie?.Thumbnail} alt="featured-image" className="" />
              <h1 className="text-lg md:text-2xl text-zinc-300 text-center font-bold italic">
                {movie?.Title}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </CanvasAnimation>
  );
};

export default Hero;
