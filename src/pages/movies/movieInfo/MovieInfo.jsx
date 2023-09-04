import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { LuListVideo } from 'react-icons/lu';
import { Link, useLocation, useParams } from 'react-router-dom';
import FeaturedMovies from '../../home/featuredMovies/FeaturedMovies';
// import { useContext } from 'react';
// import { AuthContext } from '../../../providers/AuthProvider';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const MovieInfo = () => {
  const location = useLocation();
  const { index } = useParams();

  const { movie } = location?.state;
  console.log(movie);
  //   const { Title, Year, Plot, Released, Director, Actors, Poster, Runtime, Language, Thumbnail, imdbRating, Genre, } = movie || {};

  // const PlayButton = () => {
  //   navigate('/video-player');
  // };

  //   const AddToWatchList = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/addToWatchlist', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           userEmail: user?.email,
  //           movie: movie,
  //         }),
  //       });

  //       if (response.ok) {
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'success',
  //           title: 'Movie added to watchlist',
  //           showConfirmButton: false,
  //           timer: 1500
  //         })
  //         console.log('Movie added to watchlist');
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Oops...',
  //           text: 'Please Try Again Movie Not  added to watchlist',
  //           footer: '<a href="">Why do I have this issue?</a>'
  //         })
  //       }
  //     } catch (error) {
  //       console.error('Error adding movie to watchlist', error);
  //     }
  //   };

  // console.log(movie);

  const {
    imdbID,
    Title,
    Year,
    Plot,
    Released,
    Director,
    Actors,
    Poster,
    Runtime,
    Language,
    Thumbnail,
    imdbRating,
    Genre,
  } = movie || {};

  const dispatch = useDispatch();

  // Get the wishlist from the Redux store
  // Get the current wishlist from local storage
  const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if a movie with the same Title is already in the wishlist
  const isAlreadyInWishlist = currentWishlist.some(
    (wishlistMovie) => wishlistMovie.Title === Title
  );

  const handleAddToWishlist = () => {
    if (isAlreadyInWishlist) {
      Swal.fire({
        title: 'Movie Already Added!',
        text: 'This movie is already in your wishlist.',
        icon: 'warning',
      });
    } else {
      // If the movie is not in the wishlist, add it and update local storage
      currentWishlist.push(movie);
      localStorage.setItem('wishlist', JSON.stringify(currentWishlist));

      Swal.fire({
        title: 'Added to Wishlist!',
        text: 'The movie has been added to your wishlist.',
        icon: 'success',
      });
    }
  };

  return (
    <div
      className="hero flex flex-row lg:w-[80vw] mx-auto lg:h-[80vh] mt-10 rounded-sm"
      style={{ backgroundImage: `url(${Thumbnail})` }}
    >
      <div className="hero-overlay backdrop-blur-sm backdrop-brightness-50 flex flex-col md:flex-row h-full lg:h-[80vh] gap-5 p-5">
        {/* Movie Poster */}
        <div className="md:w-2/5">
          <img
            src={Poster}
            alt={`movie-poster of ${Title}`}
            className="w-full h-full object-cover"
            // onClick={()=>PlayButton()}
          />
        </div>

        {/* Movie Info */}
        <div className="md:w-3/5 flex flex-col justify-between">
          {/* Movies Details */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
              {Title} [{Year}]
            </h2>
            <p className="mt-5 text-sm">{Plot}</p>

            <div className="mt-10 flex flex-col w-[60%] text-sm md:text-base gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5 text-sm">
                  IMDb Rating:<span className="font-bold">{imdbRating}</span>
                </div>
                {/* <div className="divider divider-horizontal"></div> */}
                <div className="flex gap-5 text-sm">
                  Genre:<span className="font-bold">{Genre}</span>
                </div>
                <div className="flex gap-5 text-sm">
                  Release Date: <span className="font-bold">{Released}</span>
                </div>
                <div className="flex gap-5 text-sm">
                  Duration: <span className="font-bold">{Runtime}</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="mt-5 flex flex-col md:flex-row gap-5">
                <button
                  onClick={handleAddToWishlist}
                  className="btn capitalize bg-cyred font-bold border-none rounded-sm"
                >
                  <span className="">
                    <LuListVideo size={20} />
                  </span>{' '}
                  Add to Watchlist
                </button>
                {/* <button className="btn capitalize bg-cyred font-bold border-none rounded-sm">
                  
                  <span>
                    <FaCloudDownloadAlt size={20} />
                  </span>{' '}
                  Watch
                </button> */}
                <Link to={`/movieinfo/${index}`} className="btn capitalize bg-cyred font-bold border-none rounded-sm">
  <span>
    <FaCloudDownloadAlt size={20} />
  </span>{' '}
  Watch
</Link>

              </div>
            </div>
          </div>

          {/* Recommended Movies */}
          <div className="w-full mt-5">
            <h2 className="border-l-4 pl-2 font-bold">Movies you may like</h2>
            <div className="">
              <Marquee speed={5}>
                <FeaturedMovies />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
