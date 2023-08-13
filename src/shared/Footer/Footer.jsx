import React from 'react';
const Footer = () => {
  return (
    <div className="bg-gradient-to-r mt-20">
      <footer className="bg-black bg-opacity-60 text-gray-300 py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img src="/cyco-logo.png" alt="cyco Logo" className="w-40" />
            <p className="mt-4 text-sm">CYCO BELONGS TO CYBERCORPS</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-2">Explore</h3>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                TV Shows
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Movies
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-2">Help</h3>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                FAQs
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm border-t-2 pt-2">
          <p>&copy; {new Date().getFullYear()} CYCO, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
