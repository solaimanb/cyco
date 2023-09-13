// import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.css';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // import required modules
// import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import useMovies from '../../../hooks/useMovies';

const Hero = () => {
  // const [movies] = useMovies();
  // console.log(movies);
  const movies = [
    {Thumbnail: "https://1.bp.blogspot.com/-WcCXxvbic7w/YVApHdxxw0I/AAAAAAAAKzw/gaaxBC6yMRwyIw_oRz5oQFS75CAqyLd5ACPcBGAsYHg/w919/dune-2021-movie-4k-uhdpaper.com-117.0_c-thumbnail.jpg",
    Title:"Dune",
  },
    {Thumbnail: "https://w0.peakpx.com/wallpaper/289/41/HD-wallpaper-dwayne-johnson-jungle-cruise.jpg",
    Title:"Jungle Cruise",},
    {Thumbnail: "https://w0.peakpx.com/wallpaper/621/220/HD-wallpaper-mortal-engines-2018-promo-poster-hera-hilmar-hester-shaw-hera-hilmarsdottir-icelandic-actress.jpg",
    Title:"Mortal Engines",},
    {Thumbnail: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Featured-Black-Panther-Poster-Hidden-Details.jpg?q=50&fit=contain&w=943&h=&dpr=1.5",
    Title:"Black Panther",},
    {Thumbnail: "https://w0.peakpx.com/wallpaper/212/572/HD-wallpaper-evil-dead-rise-movie-poster-2023.jpg",
    Title:"Evil Dead Rise",},
    {Thumbnail: "https://w0.peakpx.com/wallpaper/289/913/HD-wallpaper-movie-inception-ellen-page-joseph-gordon-levitt-leonardo-dicaprio-tom-hardy-thumbnail.jpg",
    Title:"Inception",},
    {Thumbnail: "https://e1.pxfuel.com/desktop-wallpaper/976/295/desktop-wallpaper-best-6-boyhood-on-hip-boyhood-thumbnail.jpg",
    Title:"Boyhood",},
    {Thumbnail: "https://www.superherohype.com/wp-content/uploads/sites/4/2022/05/moon-knight-poster-featured.jpg",
    Title:"Moon Knight",},
    {Thumbnail: "https://dapsmagic.com/wp-content/uploads/2023/03/Haunted-Mansion-Featured-Image-1-1-1024x576.jpg?ezimgfmt=ngcb2/notWebP",
    Title:"Haunted Mansion",},
  ]

  // const handleWatchMovie = () => {
  //   console.log('watch movie');
  // };

  return (
    <section className="hero-container">
      <div className='slider'>
        <div className='rotator'>
        {movies?.map((movie, index)=>(
            <span  style={{ '--i':index + 1 }} key={index}>
              <img src={movie?.Thumbnail} alt="" />
              <h2 className='text-zinc-200 text-center'>{movie?.Title}</h2>
            </span>
            
          ))}

        </div>
      </div>
      {/* <Swiper 
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       slidesPerView={'auto'}
       coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }
       }
       pagination={{el:'.swiper-pagination', clickable:true}}
       navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true
       }}
       modules={[EffectCoverflow, Navigation, Pagination]}
       className='swiper_contianer'
      >
          {movies?.map((movie, index)=>(
            <SwiperSlide key={index}>
              <img src={movie?.Thumbnail} alt="" />
              <h1 className='text-2xl text-zinc-300 text-center'>{movie?.Title}</h1>

            </SwiperSlide>
             
          ))}
          <div className='slider-controler'>
              <div className='swiper-button-prev slider-arrow'>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className='swiper-button-next slider-arrow'>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
          </div>
      </Swiper> */}

      {/* <Swiper
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
              className="hero h-[500px] lg:h-[600px] xl:min-h-screen"
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
      </Swiper> */}

      {/* <div className="z-10 absolute h-[100%] inset-0 w-[100%] backdrop-brightness-70 top-0 left-0"></div> */}
    </section>
  );
};

export default Hero;
