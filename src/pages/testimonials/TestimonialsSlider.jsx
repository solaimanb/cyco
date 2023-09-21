import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'VIP-Club-Member',
    message:
      'Cyco tv is Game changing concept in online streeming Platform. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Subscriber',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'User',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

const TestimonialSlider = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  console.log(feedbacks);

  useEffect(() => {
    // Fetch feedbacks when the component mounts
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/feedbacks`
        );
        setFeedbacks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation={true}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[Autoplay, Navigation]}
      // className="h-[440px]"
    >
      {feedbacks?.map((feedBack, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-10">
              {/* avater, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avater */}
                  <div>
                    <img
                      src={feedBack.photoURL}
                      alt="feedback giver Image"
                      width={110}
                      height={110}
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg ">{feedBack.displayName}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {/* {feedBack.position} */} <p>Honorable Speaker</p>
                  </div>
                </div>
              </div>

              {/* quote and message */}

              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  {/* icon */}
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-cyred mx-auto md:mx-0 " />
                </div>
                <div className="xl:text-lg text-center md:text-left mb-4 text-white">
                  {feedBack.feedback}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
