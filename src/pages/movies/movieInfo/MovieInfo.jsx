import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { LuListVideo } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FeaturedMovies from "../../home/featuredMovies/FeaturedMovies";
import { addHistory } from "../../../api/historyPostData";
import WatchTimer from "../../../components/watchTimer/WatchTimer";
import Container from "../../../components/container/Container";

const MovieInfo = () => {
  const [movieReviews, setMovieReviews] = useState("");

  console.log(movieReviews);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();
  const location = useLocation();
  const { movie } = location?.state;
  const { user, setLoading } = useAuth();
  const email = user?.email;
  const movieId = movie?._id; // Get the movie ID
  const userId = "64f89f19746d2fab49ffb3f9";

  const [watching, setWatching] = useState(false);

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

  const handleHistory = async (Title, email, Poster) => {
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
          text: "Please login to add to your wishlist",
          icon: "warning",
          background: "#222",
          confirmButtonText: "login",
          showCancelButton: true,
        });

        if (response?.isConfirmed) {
          navigate("/login");
        }
        return;
      }

      const response = await axiosSecure.post("/wishlist", wishlistItem);
      console.log(response);

      if (response?.status === 200) {
        if (response?.data?.message === "Already added to wishlist!") {
          Swal.fire({
            text: "Movie is already in your wishlist",
            icon: "info",
            background: "#222",
          });
        } else {
          console.log("Movie added to wishlist", response?.data);
          Swal.fire({
            text: "Added to wishlist!",
            icon: "success",
            background: "#222",
            reverseButtons: true,
          });
        }
      } else {
        //
      }
    } catch (error) {
      console.log("An error occurred while adding to wishlist:", error);

      if (error.response) {
        console.error(
          "Server responded with:",
          error.response.status,
          error.response.data
        );
      }
    }
  };

  useEffect(() => {
    // asyncFynction
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/movieReviews");
        console.log(response);
        setMovieReviews(response.data);
      } catch (error) {
        console.log("Data fetching Unsuccessfull", error);
      }
    };

    fetchMovieReviews();
  }, []);

  return (
    <Container>
    <div className="pb-20">
    <div
      className="hero flex flex-row w-full h-full mt-2 md:mt-5 lg:mt-10 rounded-sm"
      style={{ backgroundImage: `url(${Thumbnail})` }}
    >
      <WatchTimer
        movieId={movieId}
        userId={userId}
        onStart={handleWatchStart}
        onStop={handleWatchStop}
      />
      <div className="hero-overlay backdrop-blur-sm backdrop-brightness-50 flex flex-col md:flex-row h-full gap-5 p-2 md:p-5">
        {/* Movie Poster */}
        <div className="md:w-2/5">
          <img
            src={Poster}
            alt={`movie-poster of ${Title}`}
            className="w-full h-full object-cover"
            // onClick={()=>PlayButton()}

          />
          <div className="hero-overlay backdrop-blur-sm backdrop-brightness-50 flex flex-col md:flex-row h-full lg:h-[80vh] gap-5 p-2 md:p-5">
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
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold">
              {Title} [{Year}]
            </h2>
            <p className="mt-5 lg:mt-3 text-xs md:text-sm">{Plot}</p>

            <div className="mt-10 lg:mt-3 2xl:mt-10 flex flex-col w-[60%] text-sm md:text-base gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex gap-5 text-sm">
                  IMDb Rating:<span className="font-bold">{imdbRating}</span>
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
              </div>
            </div>
          </div>

          {/* Recommended Movies */}
          <div className="w-full h-full mt-5 ">
            <h2 className="border-l-4 pl-2 font-bold">Movies you may like</h2>
            <div className="lg:h-56 lg:overflow-hidden 2xl:h-full">
              <Marquee speed={5}>
                <FeaturedMovies />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Container>
  );
};

export default MovieInfo;
