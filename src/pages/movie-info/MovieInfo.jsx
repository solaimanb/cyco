import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaCloudDownloadAlt, FaFolderPlus, FaPlayCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import FeaturedMovies from '../home/featuredMovies/FeaturedMovies';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const MovieInfo = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const { movie } = location.state;
    const { Title, Released, Director, Actors, Poster, Runtime, Language, Plot } = movie || {};
    const PlayButton = () => {
        navigate('/video-player');
    };
    const AddToWatchlist = async () => {
        console.log('clciked',user);
        try {
            const response = await fetch('YOUR_BACKEND_API_URL/addToWatchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movie), // You might need to adjust the payload
            });

            if (response.ok) {
                // Handle success, e.g., show a notification
                console.log('Movie added to watchlist');
            } else {
                // Handle error, e.g., show an error message
                console.error('Error adding movie to watchlist');
            }
        } catch (error) {
            console.error('Error adding movie to watchlist', error);
        }
    };


    return (
        <div>
            <div className="hero min-h-screen rounded-lg " style={{ backgroundImage: `url(${Poster})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="md:w-1/3 md:-ml-[650px] p-4 md:p-8">
                    <h2 className="text-2xl md:text-4xl font-semibold">{Title}</h2>
                    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-1 ">
                        <button className="btn btn-sm btn-outline md:mr-2">Cyco+</button>
                        <p className="my-1 md:my-0">{Runtime}•</p>
                        <p className="my-1 md:my-0">{Released}•</p>
                        <p className="my-1 md:my-0">{Language}</p>
                    </div>
                    <p className="my-3 text-sm md:text-base">{Plot}</p>
                    <div className="mb-3">
                        <p className="text-sm md:text-base">Director: {Director}</p>
                        <p className="text-sm md:text-base">Actors: {Actors}</p>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                        <button
                            title="Continue Video"
                            onClick={PlayButton}
                            className="btn btn-primary text-base md:text-xl rounded-lg"
                        >
                            <FaPlayCircle /> Play Now
                        </button>
                        <button
                            onClick={AddToWatchlist}
                            title="Add to Watchlist"
                            className="btn btn-primary text-base md:text-xl rounded-lg"
                        >
                            <FaFolderPlus /> Add to Watchlist
                        </button>
                        <button
                            title="Download"
                            className="btn btn-primary text-base md:text-xl rounded-lg"
                        >
                            <FaCloudDownloadAlt /> Download
                        </button>
                    </div>
                </div>
            </div>
            {/* Featured Movies */}
            <div className="px-4 z-10 my-2">
                <h1 className="border-l-4 ps-3 text-white text-xl font-bold">
                    Similar Movies
                </h1>
                <div className="bg-zinc-900 px-5">
                    <Marquee speed={10}>
                        <FeaturedMovies />
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;
