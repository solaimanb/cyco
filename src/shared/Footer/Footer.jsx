import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
      <footer className="absolute left-0 w-full mt- bg-zinc-950 bg-opacity-60 text-zinc-400 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-12">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h2 className="z-10 font-bold text-2xl lg:text-3xl -rotate-3 text-[#800000]">
              CYCO
            </h2>
            {/* <img src="" alt="cyco Logo" className="w-40" /> */}
            <p className="mt-4 text-sm">CYCO BELONGS TO CYBERCORPS</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="md:text-lg font-semibold mb-2">Explore</h4>
              <Link
                to="/"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/live-tv"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                TV Shows
              </Link>
              <Link
                to="/movies"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                Movies
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="md:text-lg font-semibold mb-2">Help</h4>
              <Link
                to="help"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                Help
              </Link>
              <a
                href="contact"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="md:text-lg font-semibold mb-2">Legal</h4>
              <Link
                to="/PrivacyPolicy"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="TermsConditions"
                className="text-sm md:text-base hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm border-t-2 pt-2">
          <p>&copy; {new Date().getFullYear()} CYCO, All rights reserved by CyberCorps Team</p>
        </div>
      </footer>
  );
};

export default Footer;
