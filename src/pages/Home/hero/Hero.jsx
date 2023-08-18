import React from 'react';

const Hero = () => {
  return (
    <section className="w-[100vw]">
      <img
        className="absolute top-10 md:top-0 w-[100vw] opacity-90 left-0"
        src="/snow-white-movies-banner-cyco.webp"
        // src="/oblivion-cyco.jpg"
        alt="snow-white-movies-banner"
      />

      <div className="absolute bg-black bg-opacity-50 w-full hero-content top-0 left-0"></div>
      {/* 
            <div className='absolute -mt-[50%] w-[40%] text-white'>
                <h2 className='text-4xl font-bold '>Snow White & The Hunstman</h2>

                <p className='text-sm font-thin'>The Queen sends her men, led by a local huntsman, to bring her back. But upon her capture, the huntsman finds he's being played and turns against the Queen's men, saving Snow White in the process. Meanwhile, Snow's childhood friend, William, learns that she is alive and sets off to save her.—G.C. Bendixen</p>

                <div className='flex mt-5 gap-2'>
                    <button className='btn btn-sm bg-[#800000]'>Watch Now</button>
                    <button className='btn btn-sm border-2 border-[#800000]'>Add to Watchlist</button>
                </div>
            </div> */}
    </section>
  );
};

export default Hero;
