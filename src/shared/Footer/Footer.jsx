import React from 'react';
import {
  FaFacebook,
  FaGenderless,
  FaSpotify,
  FaTelegram,
} from 'react-icons/Fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="bg-gradient-to-r mt-20 from-purple-500 to-pink-500 ">
      <footer className="footer p-10 font-serif text-white">
        <div className="">
          <h2 className="text-3xl">CyCo</h2>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <p>
            Questions?
            <span className=" text-cyan-400 font-mono">
              {' '}
              Call 1800-040-1234
            </span>{' '}
          </p>
          <div>
            <h4>FOLLOW US:-</h4>
            <div className="flex gap-2">
              <Link>
                <FaFacebook className="text-3xl my-2 hover:text-cyan-400" />
              </Link>
              <Link>
                <FaTelegram className="text-3xl my-2 hover:text-cyan-400" />
              </Link>
              <Link>
                <FaSpotify className="text-3xl my-2 hover:text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover hover:text-red-600 flex items-center">
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Branding
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Design
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center ">
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Marketing
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            About us
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Contact
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Jobs
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title hover:text-red-600"> Legal</span>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Terms of use
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Privacy policy
          </a>
          <a className="link link-hover hover:text-red-600 flex items-center">
            {' '}
            <FaGenderless className=" text-red-700 mr-2 hover:text-white" />{' '}
            Cookie policy
          </a>
        </div>
        <div>
          <span className="footer-title ">Newsletter</span>
          <p>
            Subscribe to our newsletter and <br /> never miss Our Latest movie,
            <br /> Web series, TV Show etc.
          </p>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative hover:shadow-xl">
              <input
                type="text"
                placeholder="username@site.com"
                className=" bg-white input input-bordered w-full pr-16 text-black"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
        <div>
          <p>Copyright © 2023 - All right reserved by CyCo Industries Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
