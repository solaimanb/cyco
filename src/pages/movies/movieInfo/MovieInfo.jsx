import { useDispatch, useSelector } from "react-redux";
import FeaturedMovies from "../../home/featuredMovies/FeaturedMovies";
import React, { useState } from 'react';
import { FaCloudDownloadAlt, FaPlus } from 'react-icons/fa';
import { LuListVideo } from 'react-icons/lu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addHistory } from '../../../api/historyPostData';
import WatchTimer from '../../../components/watchTimer/WatchTimer';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DisplayReviews from './writeAReview/DisplayReviews';
import WriteAReviewModal from './writeAReview/WriteAReviewModal';
import useTitle from '../../../hooks/useTitle';
import CategoryMovies from "../categoryMovies/CategoryMovies";

const MovieInfo = () => {
  useTitle('Movie Details | CYCO')
  const [isHovering, setIsHovering] = useState(false);

  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const firstElement = CategoryMovies();

  const { movie } = location?.state;
  const { user, loading, setLoading } = useAuth();
  const email = user?.email;
  const movieId = movie?._id;
  const userId = '64f89f19746d2fab49ffb3f9';
  const [watching, setWatching] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isWriteaReviewOpen, setIsWriteaReviewOpen] = useState(false);

  const {
    _id,
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
    history,
    Trailer,
  } = movie || {};

  const handleWatchStart = () => {
    // Your logic to start watching
    setWatching(true); // This sets the watching state to true
  };

  const handleWatchStop = () => {
    // Your logic to stop watching
    setWatching(false); // This sets the watching state to false
  };

  const handleHistory = (Title, email, Poster) => {
    addHistory({ Title, email, Poster })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // WATCH-LIST HANDLER:
  const handleAddToWishlist = async () => {
    try {
      const wishlistItem = {
        user,
        movie,
        isHistory: history,
      };

      if (!user) {
        const response = await Swal.fire({
          text: 'Please login to add to your wishlist',
          icon: 'warning',
          background: '#222',
          confirmButtonText: 'login',
          showCancelButton: true,
        });

        if (response?.isConfirmed) {
          navigate('/login');
        }
        return;
      }

      const response = await axiosSecure.post('/wishlist', wishlistItem);
      console.log(response);

      if (response?.status === 200) {
        if (response?.data?.message === 'Already added to wishlist!') {
          Swal.fire({
            text: 'Movie is already in your wishlist',
            icon: 'info',
            background: '#222',
          });
        } else {
          console.log('Movie added to wishlist', response?.data);
          Swal.fire({
            text: 'Added to wishlist!',
            icon: 'success',
            background: '#222',
            reverseButtons: true,
          });
        }
        console.log('Movie added to wishlist', response?.data);
        Swal.fire({
          text: 'Added to wishlist!',
          icon: 'success',
          background: '#222',
          reverseButtons: true,
        });
      } else if (response?.status === 409) {
        Swal.fire({
          text: response?.data?.message || 'Movie is already in your wishlist',
          icon: 'info',
          background: '#222',
        });
      } else {
        Swal.fire({
          text: 'An error occurred while adding to wishlist. Please try again later.',
          icon: 'error',
          background: '#222',
        });
      }
    } catch (error) {
      console.log('An error occurred while adding to wishlist:', error);

      if (error.response) {
        console.error(
          'Server responded with:',
          error.response.status,
          error.response.data
        );
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="px-2 md:p-10 xl:p-16 mt-20 lg:mt-10">
      <div
        className="hero flex flex-row w-[90%] lg:w-[80%] h-[90%] mx-auto
         mt-2 md:mt-5 lg:mt-10 rounded-sm relative"
        style={{ backgroundImage: `url(${Thumbnail})` }}
      >
        <WatchTimer
          movieId={movieId}
          userId={userId}
          onStart={handleWatchStart}
          onStop={handleWatchStop}
        />
        <div className="hero-overlay backdrop-blur-sm backdrop-brightness-50 flex flex-col md:flex-row h-full gap-5 py-2 px-5 md:p-5">
          {/* MOVIE POSTER */}
          <div className="md:w-2/5 h-full bg-white">
            <img
              src={Poster}
              alt={`movie-poster of ${Title}`}
              className="w-full h-full object-cover"
              // onClick={()=>PlayButton()}
            />
          </div>

          {/* MOVIE INFO */}
          <div className="md:w-3/5 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">
                {Title} [{Year}]
              </h2>
              <p className="mt-5 lg:mt-3 text-xs md:text-sm">{Plot}</p>

              <div className="mt-10 lg:mt-3 2xl:mt-10 flex flex-col w-[60%] text-sm md:text-base gap-2">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5 text-sm">
                    IMDb Rating:
                    <span className="font-bold">{imdbRating}</span>
                  </div>
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

                <div className="mt-5 lg:mt-3 2xl:mt-5 flex flex-col md:flex-row gap-5">
                  {/* WISHLIST BTN*/}
                  <button
                    onClick={handleAddToWishlist}
                    className="btn capitalize bg-cyred font-bold border-none rounded-sm"
                  >
                    <span className="">
                      <LuListVideo size={20} />
                    </span>
                    Add to wishlist
                  </button>

                  {/* WATCH-NOW FUNC */}
                  {firstElement && firstElement ? (
                    <Link
                      to="/watch-video"
                      state={{ movie }}
                      className="btn capitalize bg-cyred font-bold border-none rounded-sm"
                    >
                      <button
                        className="flex"
                        onClick={() => {
                          handleHistory(Title, email, Poster);
                        }}
                      >
                        <span>
                          <FaCloudDownloadAlt size={20} />
                        </span>
                        Watch now
                      </button>
                    </Link>
                  ) : (
                    <Link
                      className="btn capitalize bg-cyred font-bold border-none rounded-sm"
                      to="/dashboard/subscriptions"
                    >
                      Subscriptions Now
                    </Link>
                  )}

                  {/* Movie REVIEW BTN */}
                  <button
                    onClick={() => setIsWriteaReviewOpen(!isWriteaReviewOpen)}
                    className="hidden md:absolute top-4 right-4 btn capitalize bg-cyred font-bold border-none rounded-sm"
                  >
                    <FaPlus className="text-white" />
                    <h3 className="text-sm">Write a Review</h3>
                  </button>
                </div>
              </div>

              {/* FEEDBACK/REVIEW BTN */}
              {/* <button
                onClick={() => setIsWriteaReviewOpen(!isWriteaReviewOpen)}
                className="flex flex-row items-center gap-2 mt-2"
              >

                <h3 className="text-sm">Write a Review</h3>
              </button> */}
            </div>
          </div>

          {/* Movie REVIEW BTN */}
          <button
            onClick={() => setIsWriteaReviewOpen(!isWriteaReviewOpen)}
            className="btn capitalize bg-cyred font-bold border-none rounded-sm"
          >
            <FaPlus className="text-white" />
            <h3 className="text-sm">Write a Review</h3>
          </button>
          <WriteAReviewModal
            isOpen={isWriteaReviewOpen}
            setIsOpen={setIsWriteaReviewOpen}
            title={Title}
            thumbnail={Thumbnail}
            genre={Genre}
            poster={Poster}
          />

          {/* Recommended Movies */}
          {/* <div className="w-full h-full mt-auto">
              <h2 className="border-l-4 pl-2 font-bold">Movies you may like</h2>
              <div className="lg:h-56 lg:overflow-hidden 2xl:h-full">

                  <FeaturedMovies />
                </Marquee>
              </div>
            </div> */}
        </div>
      </div>

      <div className="my-20 mx-auto px-10 lg:px-20 xl:px-40 ">
        <h2 className="border-l-4 pl-2 font-bold">
          Movie Reviews
        </h2>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <DisplayReviews />
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
