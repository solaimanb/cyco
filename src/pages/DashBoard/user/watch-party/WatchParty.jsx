import React from 'react';
import useParty from '../../../../hooks/useParty';
import PartyCard from './partyCard/PartyCard';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import Loading from '../../../../components/loading/Loading';
import SearchSlot from '../forum/SearchSlot';

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
            {/* Details About Our Running Event / Party */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://engineersdiarybd.com/wp-content/uploads/2022/06/FB_IMG_1654366263114.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold font-mono">Meta Journey</h1>
                        <p className="py-6">Iam Abdullah al Mamun From Meta ML Engineer.</p>
                        <button className="btn btn-primary rounded-lg">Watch Party </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchParty;