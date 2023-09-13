import TestimonialSlider from './TestimonialsSlider';

const Testimonials = () => {
  return (
    <section className="h-full mt-20 pb-10 md:w-[80%] lg:w-[70%] mx-auto backdrop-blur-sm backdrop-opacity-80 border-b-2 border-cyred py-20 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <h2 className="h2 mb-8 xl:mb-0">
          Our Subscribers{' '}
          <span className="text-cyred md:text-2xl lg:text-3xl">Reviews</span>
        </h2>
        {/* slider */}
        <div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
