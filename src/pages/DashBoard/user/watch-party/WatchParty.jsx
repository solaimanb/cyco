import React from 'react';
import useParty from '../../../../hooks/useParty';
import PartyCard from './partyCard/PartyCard';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Loading from '../../../../components/loading/Loading';
import SearchSlot from '../forum/SearchSlot';
import Title from '../../../../components/title/Title';

const WatchParty = () => {

    return (
        <div>

            <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
                    Cyco Event
                </p>

                {/* Search Module Slot */}
                <SearchSlot />
            </div>
            {/* event info  */}
            <div className="hero min-h-screen rouned-lg" style={{ backgroundImage: 'url(https://engineersdiarybd.com/wp-content/uploads/2022/06/FB_IMG_1654366263114.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-sans font-bold">Abdullah Al Mamun Event</h1>
                        <p className="mb-5">Joureny Of Abdullah AL Mamun </p>
                        <button className="btn btn-primary rounded-lg">Watch Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchParty;