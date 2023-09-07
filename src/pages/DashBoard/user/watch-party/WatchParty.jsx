import React from 'react';
import useParty from '../../../../hooks/useParty';
import PartyCard from './partyCard/PartyCard';
import { Link } from 'react-router-dom';

const WatchParty = () => {
    const [party, loading] = useParty();
    console.log(party);
    const CurrentBannerParty = party[0];

    if (loading) {
        return <p>loadingg</p>
    }

    return (
        <div>
            <div className=" min-h-[60%] bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse mt-[-8px]">
                    <img src={party[0].banner} className="max-w-sm rounded-lg shadow-2xl w-[70%]" />
                    <div>
                        <h1 className="text-5xl font-bold">{party[0].title}</h1>
                        
                        <Link to='watch-party-public' state={{item:CurrentBannerParty}}><button className="bg-red-400 Categorybtn ">Join Now</button></Link>
                    </div>
                </div>


                <div className='py-5 z-10'>
                    <div className="flex flex-row md:flex-row gap-3 md:gap-4">
                        {
                            party.map((event, index) => <PartyCard key={index} event={event} index={index}></PartyCard>)
                        }
                    </div>
                </div>


                {/* 3 cards for Watch Party ,now its static, */}
                {/* <div className='grid md:grid-cols-3 mt[-12px]'>

                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <img src="https://i.ibb.co/kMnGzYB/download.webp" alt=" Programmer Builder " />
                        <div className="card-body">
                            <h2 className="card-title">Programming Hero Solution!</h2>
                            <p>If a dog chews  Programmer Builder  whose  Programmer Builder  does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className=" Categorybtn">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <img src="https://i.ibb.co/kMnGzYB/download.webp" alt=" Programmer Builder " />
                        <div className="card-body">
                            <h2 className="card-title"> Programmer Builder !</h2>
                            <p>If a dog chews  Programmer Builder  whose  Programmer Builder  does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="Categorybtn">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <img src="https://i.ibb.co/kMnGzYB/download.webp" alt=" Programmer Builder " />
                        <div className="card-body">
                            <h2 className="card-title"> Programmer Builder !</h2>
                            <p>If a dog chews  Programmer Builder  whose  Programmer Builder  does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="Categorybtn">Watch Now</button>
                            </div>
                        </div>
                    </div>


                </div> */}
            </div>

        </div>
    );
};

export default WatchParty;