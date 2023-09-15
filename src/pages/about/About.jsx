import { Divider } from '@nextui-org/react';
import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import FeedBack from '../../components/feedback/FeedBack';
import './About.css';

const members = [
  {
    name: 'Solaiman Badsha',
    image: 'https://i.ibb.co/LnHcDnG/soloman.png',
    role: 'Team Leader',
  },
  {
    name: 'Kabir Shuvo',
    image: 'https://i.ibb.co/g6QL6JW/kabir.png',
    role: 'Web Developer',
  },
  {
    name: 'Mohammad Sarowar',
    image: 'https://i.ibb.co/QJFy0Tm/sarwoar.png',
    role: 'Web Developer',
  },
  {
    name: 'Naimul Islam',
    image: 'https://i.ibb.co/fYbN2fX/naimul.png',
    role: 'Web Developer',
  },
  {
    name: 'Raihanul Islam Sharif',
    image: 'https://i.ibb.co/nQMkGpd/raihan.png',
    role: 'Web Developer',
  },
  {
    name: 'Annisha Siddika',
    image: 'https://i.ibb.co/1YgLmZk/annisha.png',
    role: 'Web Developer',
  },
];

const About = () => {
  const renderMember = (member, index) => (
    <div
      key={index}
      className="w-[80%] md:w-[250px] mx-auto bg-black mb-4 rounded-sm overflow-hidden flex flex-col justify-between"
    >
      <figure className="relative w-full h-[250px] p-4 opacity-70">
        <img
          src={member?.image}
          alt="A Person Image"
          className="rounded-sm object-cover w-full h-full"
        />
        <div className="absolute bottom-3 -right-1 -rotate-45">
          <div className="w-12 h-6 bg-black"></div>
        </div>
      </figure>

      <div className="relative flex flex-row text-start p-4 gap-2 h-full">
        <div className="flex flex-col justify-between space-y-2">
          <FaFacebookSquare size={22} />
          <FaGithubSquare size={22} />
          <FaInstagramSquare size={22} />
        </div>

        <div className="flex flex-col justify-between space-y-4 text-start">
          <h2 className="card-title text-lg font-bold text-gray-300">
            {member?.name}
          </h2>

          <p className="text-xs text-gray-400">[ {member?.role} ]</p>
        </div>

        <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-cyred w-10 h-10"></div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="mx-auto text-zinc-200">
        <div
          id="aboutDiv"
          className="w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row justify-start text-start mt-28"
        >
          <div>
            <div
              className="font-bold text-center"
              style={{
                '--clr': '#800000',
                width: '70%',
              }}
              id="about"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-6xl 2xl:text-9xl text-gray-300 font-bold text-start"
                data-text="&nbsp;&nbsp;About&nbsp;&nbsp;"
              >
                <span>&nbsp;&nbsp;About&nbsp;&nbsp;</span>
                <br className="hidden md:flex" />
                <span>&nbsp;&nbsp;Us&nbsp;&nbsp;</span>
              </h2>
            </div>

            <div className="md:w-[50%] ml-4 lg:ml-10 2xl:ml-20">
              <p className="z-20 text-start py-4 text-sm md:text-base italic">
                CYCO is a streaming platform. It offers a range of movies, TV
                shows, and other forms of entertainment content for users to
                watch online. <span className="">⚔️</span>
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-0">{renderMember(members[0])}</div>
        </div>

        <span className="divider">
          <Divider />
        </span>

        {/* CYCO TEAM */}
        <div className="md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
          {members &&
            members
              .slice(1)
              .map((member, index) => renderMember(member, index))}
        </div>

        <div className="my-8"></div>

        <div className="my-20">
          <FeedBack />
        </div>
      </div>
    </section>
  );
};

export default About;
