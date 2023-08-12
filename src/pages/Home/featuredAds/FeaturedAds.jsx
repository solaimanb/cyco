import React from 'react';

const FeaturedAds = () => {
  return (
    <section className="mt-20 relative w-full">
    <img
      className="w-full h-[450px] object-cover"
      src="https://i.ibb.co/WkPkNvf/tv-banshee-breaking-bad-vikings-wallpaper-preview.jpg"
      alt=""
    />
   <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 flex flex-col justify-center items-center text-white">
        <h2 className="text-3xl font-semibold mb-2">CYCO Experience</h2>
        <p className="text-lg mb-4">Discover a New Dimension of Entertainment.</p>
        <a href="#" className="text-white border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
          Start Now
        </a>
      </div>
  </section>
  );
};

export default FeaturedAds;
