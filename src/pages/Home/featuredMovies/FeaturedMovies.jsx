import React from 'react';

const FeaturedMovies = () => {
  const imageUrls = [
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
    'https://i.ibb.co/TYp2Y5C/8-jpg.png',
  ];

  return (
    <div className="mx-5 py-5">
      <div className="flex flex-row md:flex-row gap-4 md:gap-8">
        {imageUrls.map((image, index) => (
          <div key={index} className="w-full md:w-[180px] h-[280px]">
            <img
              src={image}
              alt={`Kid ${index + 1}`}
              className="w-full h-full object-cover rounded-sm hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovies;
