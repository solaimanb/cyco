import React from 'react';

const FeaturedMovo = () => {
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
  ];

  return (
    <div className="mx-5 py-9">
      <div className="flex flex-row md:flex-row gap-4 md:gap-10">
        {imageUrls.map((image, index) => (
          <div key={index} className="w-full md:w-[127px] h-[200px]">
            <img
              src={image}
              alt={`Kid ${index + 1}`}
              className="w-full h-full object-cover rounded hover:brightness-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedMovo;
