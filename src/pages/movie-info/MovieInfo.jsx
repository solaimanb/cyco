import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPlayCircle ,FaFolderPlus,FaCloudDownloadAlt } from "react-icons/fa";

const MovieInfo = () => {
    const location = useLocation();
    const { movie } = location.state;
    const { Title, Released, Director, Actors, Poster,Runtime,Language,Plot } = movie || {};
    return (
        <div>
            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url(${Poster})` }}>
                {/* <img src={Poster} className='w-[100%] h-[50%] mt-0' alt="" /> */}
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='w-1/3'>
                    <h2 className='text-4xl semibold'>{Title}</h2>
                    <div className='flex space-x-1'>
                        <button className='btn btn-sm btn-outline'>Cyco+</button>
                        <p className='my-auto'>{Runtime}•</p>
                        <p className='my-auto'>{Released}•</p>
                        <p className='my-auto'>{Language}</p> 
                    </div>
                    <p className='my-3'>{Plot}</p>
                    <div>
                        <p>Director: {Director}</p>
                        <p>Actors: {Actors}</p>
                    </div>
                    <div className='flex my-3 space-x-3'>
                        <button title='Continue Video' className='btn btn-primary text-xl rounded-e-lg'><FaPlayCircle/> Play Now</button>
                        <button title='Add to Watchlist' className='btn btn-primary text-xl rounded-lg'><FaFolderPlus/> Add to Watchlist</button>
                        <button title='Download' className='btn btn-primary text-xl rounded-lg'><FaCloudDownloadAlt/> Download</button>
                    </div>
                </div>
            

            {/* <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        
                    </div>
                </div> */}
        </div>
        </div >
    );
};

export default MovieInfo;