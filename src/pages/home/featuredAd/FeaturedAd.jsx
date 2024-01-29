import React from 'react';

const FeaturedAd = () => {
  return (
    <section
      className="hero mt-20 relative w-full h-[400px] items-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/WkPkNvf/tv-banshee-breaking-bad-vikings-wallpaper-preview.jpg)`,
      }}
    >
      <div className="backdrop-blur-sm backdrop-opacity-60 backdrop-brightness-0 h-full md:pt-[150px] flex flex-col justify-center md:justify-normal text-start items-center w-full">
        <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold mb-2">CYCO Experience</h2>
        <p className="text-sm md:text-lg mb-4">
          Discover a New Dimension of Entertainment.
        </p>
        <a
          href="#"
          className="text-white py-2 px-6 rounded-full bg-cyred hover:bg-white hover:text-black transition-colors duration-300"
        >
          Watch Movies
        </a>
      </div>
    </section>
  );
};

export default FeaturedAd;
