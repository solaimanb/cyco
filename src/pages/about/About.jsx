import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import Divider from '../../components/divider/Divider';

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

  // MEMBERS INFO RENDERING COMPONENT:
  const renderMember = (member, index) => (
    <div
      key={index}
      className="w-[80%] md:w-[250px] mx-auto bg-black mb-4 rounded-sm overflow-hidden flex flex-col justify-between"
    >
      <figure className="relative w-full h-[250px] p-4 opacity-60">
        <img
          src={member?.image}
          alt="A Person Image"
          className="rounded-sm object-cover w-full h-full"
        />

        <div className="absolute top-3 -left-1 -rotate-45">
          <div className="w-12 h-6 bg-black"></div>
        </div>
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
          <h2 className="card-title text-lg font-bold">{member?.name}</h2>

          <p className="text-xs">[ {member?.role} ]</p>
        </div>

        <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-cyred w-10 h-10"></div>
      </div>
    </div>
  );

  return (
    <div className="md:w-[80%] mx-auto pt-28">
      <div className="text-center">
        <h2 className="text-2xl font-bold">About US</h2>
        <p className="text-center py-4 text-sm md:text-base w-[60%] mx-auto">
          CYCO is a streaming platform. It offers a range of movies, TV shows,
          and other forms of entertainment content for users to watch online.
          Streaming platforms have become increasingly popular for their
          convenience and wide selection of content.
        </p>
      </div>

      <span className="divider">
        <Divider />
      </span>

      {/* CYCO TEAM */}
      <div className="lg:w-[60%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        {members && members.map((member, index) => renderMember(member, index))}
      </div>
    </div>
  );
};

export default About;
