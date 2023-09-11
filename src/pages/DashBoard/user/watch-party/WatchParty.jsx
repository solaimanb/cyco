import React from 'react';
import { FaShare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const WatchParty = () => {
  const navigate = useNavigate();
  const party = {
    title:
      'SpaceX Falcon 9 launched Axiom Space’s Axiom Mission 2 (Ax-2) to the ISS',
    banner:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1f-hjggaP6l4ZdXf6v8hVA4LW_OVNKtelQ&usqp=CAU',
    source: 'https://www.youtube.com/live/Nv6b9JYiaBY?si=Gv60n9n-IuE-TjfK',
    description:
      'NASA’s Kennedy Space Center in Florida. Following stage separation, Falcon 9’s first stage landed on Landing Zone 1 (LZ-1) at Cape Canaveral Space Force Station.',
  };

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Watch Party
        </p>
      </div>

      {/* PARTY SLOT  */}
      <div className="flex flex-col border-b-4 border-zinc-800/50 pb-4">
        <div className="w-full">
          <img src={party?.banne} className="w-full object-cover rounded-sm" />
        </div>

        <div className="w-[90%] lg:w-[80%] mr-auto space-y-4 mt-4">
          <h1 className="text-2xl font-bold">{party?.title}</h1>
          <p className="text-base">{party?.description}</p>

          <div className="flex flex-row gap-5">
            <Link to="watch-party-public" state={{ party }}>
              <button className="btn bg-zinc-800/80 rounded-sm">
                Launch Streaming
              </button>
            </Link>
            <button className="btn bg-zinc-800/80 rounded-sm">
              <FaShare size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchParty;
