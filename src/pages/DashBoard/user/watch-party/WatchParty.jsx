import React from 'react';
import { FaShare } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import CommentSection from '../../../liveTv/CommentSection';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  LinkedinShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
  TwitterIcon
} from 'react-share';

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
  
  const currentUrl = window.location.href;
  

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Watch Party
        </p>
      </div>

      {/* PARTY SLOT  */}
      <div className="flex flex-col pb-4 mt-3">
        <div className="flex flex-row gap-3">
          <div className="w-4/5 h-full bg-zinc-800/20 rounded-sm">
            {/* <img
              src={party?.banner}
              className="w-full object-cover rounded-sm"
            /> */}

            <div className="relative" style={{ paddingBottom: '66.25%' }}>
              <ReactPlayer
                url={party?.source}
                width="100%"
                height="100%"
                controls
                playing // Auto-play the video
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
            </div>
          </div>

          {/* UPCOMING EVENTS */}
          <div className="w-1/5 bg-zinc-900/80 p-2">
            <div className="bg-zinc-800/50 px-1 py-2 text-center">
              <h3 className="text-sm font-bold">Upcoming Events</h3>
            </div>

            {/* TODO: dummy events---> (make these dynamic) */}
            <div className="">
              <div className="mt-2 space-y-1 border-b-2 pb-2 border-zinc-800">
                <div>
                  <img
                    src={party?.banner}
                    className="w-full object-cover rounded-sm"
                  />
                </div>
                <h4 className="text-sm font-semibold">
                  Could baker mayfield be this season's geno smith.
                </h4>
              </div>
              <div className="mt-2 space-y-1 border-b-2 pb-2 border-zinc-800">
                <div>
                  <img
                    src={party?.banner}
                    className="w-full object-cover rounded-sm"
                  />
                </div>
                <h4 className="text-sm font-semibold">
                  Could baker mayfield be this season's geno smith.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <div className="flex flex-row items-center justify-between w-full bg-zinc-900/80 px-2 py-3">
            <div className="w-3/4">
              <h1 className="font-bold md:text-xl">{party?.title}</h1>
            </div>

            <div className="flex flex-row gap-3">
              {/* Share on Facebook */}
              <LinkedinShareButton url={currentUrl}>
                <LinkedinIcon size={30} className='rounded-lg' />
              </LinkedinShareButton>

              {/* Share on Twitter */}
              <TwitterShareButton url={currentUrl}>
                <TwitterIcon size={30} className='rounded-lg' />
              </TwitterShareButton>

              {/* Share on WhatsApp */}
              <WhatsappShareButton title='Share On Whatsapp' url={currentUrl}>
                <WhatsappIcon size={30} className='rounded-lg' />
              </WhatsappShareButton>
              {/* Share On Facebook */}
              <FacebookShareButton>
                <FacebookMessengerIcon size={30} className='rounded-lg'/>
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CommentSection />
      </div>
    </section>
  );
};

export default WatchParty;
