import React from 'react';

const FeaturedMovies = () => {
  const imageUrls = [
    'https://www.al.com/resizer/E_j4zx9WpunulJYZEqNrQTidWJ0=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/entertainment_impact/photo/23544239-standard.jpg',
    'https://www.joblo.com/wp-content/uploads/2023/06/EN-US_RM_Teaser_Kora_Vertical_27x40_sRGB_PRE-1-400x600.jpg',
    'https://static1.tribute.ca/poster/660x980/65-166554.jpg',
    'https://m.media-amazon.com/images/I/81Calh8XRBL._AC_UF1000,1000_QL80_.jpg',
    'https://i.ebayimg.com/images/g/K~0AAOSwIx1i9buP/s-l1200.webp',
    'https://theusofn.files.wordpress.com/2015/06/5rw7nup.jpg',
    'https://images.bauerhosting.com/legacy/empire-images/features/59e8d795405a5c6805947751/31%20The%20Exorcist.jpg?auto=format&w=992&q=80',
    'https://images.bauerhosting.com/legacy/empire-images/features/59e8d795405a5c6805947751/12%20The%20Godfather.jpg?auto=format&w=992&q=80',
    'https://images.bauerhosting.com/legacy/empire-images/features/59e8d795405a5c6805947751/07%20Jurassic%20Park.jpg?auto=format&w=992&q=80',
    'https://alternativemovieposters.com/wp-content/uploads/2022/11/RoryKurtz_Dune.jpg',
  ];

  return (
    <div className="mx-5 py-5 z-10">
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
