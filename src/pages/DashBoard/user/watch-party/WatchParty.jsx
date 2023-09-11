import React from 'react';
import useParty from '../../../../hooks/useParty';
import PartyCard from './partyCard/PartyCard';
import { Link, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Loading from '../../../../components/loading/Loading';
import SearchSlot from '../forum/SearchSlot';
import Title from '../../../../components/title/Title';
import FeaturedMovies from '../../../home/featuredMovies/FeaturedMovies';

const WatchParty = () => {
    const navigate = useNavigate();
    const party = {
        title: 'SpaceX Falcon 9 launched Axiom Space’s Axiom Mission 2 (Ax-2) to the ISS',
        banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1f-hjggaP6l4ZdXf6v8hVA4LW_OVNKtelQ&usqp=CAU",
        source: "https://www.youtube.com/live/Nv6b9JYiaBY?si=Gv60n9n-IuE-TjfK",
        description: "NASA’s Kennedy Space Center in Florida. Following stage separation, Falcon 9’s first stage landed on Landing Zone 1 (LZ-1) at Cape Canaveral Space Force Station."
    }
    // handle Navigate 
    // const handleWatchNow = () => {

    // }
    return (
        <div>

            <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                <p className="py-3 md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
                    Cyco Party
                </p>

                {/* Search Module Slot */}
                {/* <SearchSlot /> */}
            </div>
            {/* event info  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={party.banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-serif font-bold">{party.title}</h1>
                        <p className="py-6">{party.description}</p>
                        <Link to='watch-party-public' state={{ party }}><button className="btn btn-primary rounded-lg">Watch Now</button></Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                    <p className="py-3 md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
                        
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default WatchParty;