import React from 'react';
import { FaAlignJustify, FaCheckDouble, FaInfoCircle } from 'react-icons/fa';
const Subscription = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <div className="mb-20 text-white">
            <h1 className="text-4xl font-bold">Tier Plan</h1>
            <p>Join the whitelist your perfect option below</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="card image-full">
              <div className="card-body w-full h-auto shadow-xl text-white ">
                <h2 className="text-white text-xl">Basic</h2>
                <p className="font-thin text-sm">
                  Everything you need to create your website
                </p>
                <div className=" text-white mt-5">
                  <small className="line-through">$29.99</small>
                  <spam className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                    SAVE 75%
                  </spam>

                  <h1 className="mt-4">
                    $<span className="text-6xl">10.99 </span>/mo
                    <p className="text-blue-400 text-lg">+2 months FREE</p>
                  </h1>
                </div>

                <button className="btn btn-outline btn-secondary">
                  Subscription
                </button>
                <hr />
                <div className="card-actions justify-start mt-5">
                  <div className=" ">
                    <li className="flex items-center text-xl font-thin mt-2">
                      <FaAlignJustify className="mr-2" />
                      Top Features
                    </li>

                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Most new episodes the day after they air†
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Access to award-winning Hulu Originals
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      No ads in streaming library
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Up to 6 user profilesUp to 6 user profiles
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Download and watch <FaInfoCircle className="ml-1" />
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="card indicator w-full image-full">
              <div className="card-body w-full h-auto  text-white ">
                <span className="indicator-item indicator-top indicator-center badge badge-secondary">
                  Most popular
                </span>
                <h2 className="text-white text-xl">Premium</h2>
                <p className="font-thin text-sm">
                  Everything you need to create your website
                </p>
                <div className=" text-white mt-5">
                  <small className="line-through">$59.99</small>
                  <spam className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                    SAVE 75%
                  </spam>

                  <h1 className="mt-4">
                    $<span className="text-6xl">34.99 </span>/mo
                    <p className="text-blue-400 text-lg">+2 months FREE</p>
                  </h1>
                </div>

                <button className="btn btn-outline btn-secondary">
                  Subscription
                </button>
                <hr />
                <div className="card-actions justify-start mt-5">
                  <div className=" ">
                    <li className="flex items-center text-xl font-thin mt-2">
                      <FaAlignJustify className="mr-2" />
                      Top Features
                    </li>

                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Subscriptions included in each plan
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Live TV guide to navigate channels
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      No ads in streaming library
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Up to 6 user profilesUp to 6 user profiles
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Download and watch <FaInfoCircle className="ml-1" />
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="card indicator w-full image-full">
              <div className="card-body w-full h-auto  text-white">
                <h2 className="text-white text-xl">Ulta Premium + Live TV</h2>
                <p className="font-thin text-sm">
                  Everything you need to create your website
                </p>
                <div className=" text-white mt-5">
                  <small className="line-through">$99.99</small>
                  <spam className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                    SAVE 75%
                  </spam>

                  <h1 className="mt-4">
                    $<span className="text-6xl">54.99 </span>/mo
                    <p className="text-blue-400 text-lg">+2 months FREE</p>
                  </h1>
                </div>

                <button className="btn btn-outline btn-secondary">
                  Subscription
                </button>
                <hr />
                <div className="card-actions justify-start mt-5">
                  <div className=" ">
                    <li className="flex items-center text-xl font-thin mt-2">
                      <FaAlignJustify className="mr-2" />
                      Top Features
                    </li>

                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Subscriptions included in each plan
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Access to award-winning Hulu Originals
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Record Live TV with Unlimited DVR{' '}
                      <FaInfoCircle className="ml-1" />
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Up to 6 user profilesUp to 6 user profiles
                    </li>
                    <li className="flex items-center text-sm font-thin mt-2">
                      <FaCheckDouble className="mr-2" />
                      Live TV with 90+ top channels.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
