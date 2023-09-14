import React from 'react';
import { FaAlignJustify, FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updateSelectedPlan } from '../../store/slices/paymentSlice/paymentSlice';

const Subscription = () => {
  const dispatch = useDispatch();

  const SubscriptionBasicInfo = {
    type: 'basic',
    regularPrice: 29.99,
    discountPrice: 10.99,
  };
  const SubscriptionPremiumInfo = {
    type: 'premium',
    regularPrice: 59.99,
    discountPrice: 34.99,
  };
  const SubscriptionUltaPremiumInfo = {
    type: 'Ultapremium',
    regularPrice: 99.99,
    discountPrice: 54.99,
  };

  const handlePlanSelection = (selectedPlan, amount) => {
    dispatch(updateSelectedPlan({ selectedPlan, amount }));
  };

  return (
    <div className="hero">
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
            {/* Basic Plan */}
            <div className="w-full p-6 text-white glass mb-10 md:mb-0 flex flex-col">
              <h3 className="text-lg">Basic</h3>
              <div className=" text-white mt-5">
                <small className="line-through">$51.96</small>
                <span className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                  SAVE 75%
                </span>

                <h1 className="mt-4">
                  $<span className="text-3xl font-bold">12.99 </span>/month
                  <p className="text-blue-400 text-lg">+2 months FREE</p>
                </h1>
              </div>
              <p className="font-thin text-sm text-left pt-2 pb-4">
                Affordable access to limited content with ads.
              </p>
              <hr />
              <ul className="pb-4 flex-1">
                <li className="flex items-center font-thin mt-2">
                  <FaAlignJustify className="mr-2" />
                  Top Features
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">Ad-supported viewing</span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">Access on one device at a time</span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    Standard video quality (up to 720p)
                  </span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    Offline downloads for a limited number of titles
                  </span>
                </li>
              </ul>
              <hr />
              <div className="group:mb-0">
                <Link to="/payment">
                  {' '}
                  <button
                    onClick={() => handlePlanSelection('basic', 12.99)}
                    className="w-full text-red-700 border border-red-700 rounded font-semibold hover:bg-red-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4"
                  >
                    Choose Plan
                  </button>{' '}
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="w-full p-6 text-white glass mb-10 md:mb-0 flex flex-col">
              <h3 className="text-lg">Standard</h3>
              <div className=" text-white mt-5">
                <small className="line-through">$99.96</small>
                <span className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                  SAVE 75%
                </span>

                <h1 className="mt-4">
                  $<span className="text-3xl font-bold">24.99</span>/month
                  <p className="text-blue-400 text-lg">+2 months FREE</p>
                </h1>
              </div>
              <p className="font-thin text-sm text-left pt-2 pb-4">
                Expanded library, ad-free, HD quality, on two devices.
              </p>
              <hr />
              <ul className="pb-4 flex-1">
                <li className="flex items-center font-thin mt-2">
                  <FaAlignJustify className="mr-2" />
                  Top Features
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">Ad-free viewing</span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    Access on two devices simultaneously
                  </span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    High-definition video quality (up to 1080p)
                  </span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">Unlimited offline downloads</span>
                </li>
              </ul>
              <hr />
              <Link to="/payment">
                <button
                  onClick={() => handlePlanSelection('Standard', 24.99)}
                  className="block w-full text-red-700 border border-red-700 rounded font-semibold hover:bg-red-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4 align-bottom"
                >
                  Choose Plan
                </button>{' '}
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="relative z-[1]">
              <div className="ribbon absolute -top-4 -left-4 h-36 w-36 overflow-hidden before:absolute before:top-0
               before:right-0 before:-z-[1] before:border-[10px] before:border-blue-500 after:absolute after:left-0 after:bottom-0 after:-z-[1] after:border-[10px] after:border-blue-500">
                <div className="absolute -left-14 top-[43px] w-60 -rotate-45 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-500 py-2 text-center text-white text-xs shadow-md">
                  Most Popular
                </div>
              </div>
              <div className="w-full h-full bg-red-900 p-6 text-white mb-10 md:mb-0 flex flex-col">
                <h3 className="text-lg lg:ml-6">Premium</h3>
                <div className=" text-white mt-5">
                  <small className="line-through">$199.96</small>
                  <span className=" bg-zinc-800 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                    SAVE 75%
                  </span>

                  <h1 className="mt-4">
                    $<span className="text-3xl font-bold">49.99</span>/month
                    <p className="text-blue-400 text-lg">+2 months FREE</p>
                  </h1>
                </div>
                <p className="font-thin text-sm text-left pt-2 pb-4">
                  Full library, 4K quality, ad-free, on four devices.
                </p>
                <hr />
                <ul className="pb-4 flex-1 list-disc">
                  <li className="flex items-center font-thin mt-2">
                    <FaAlignJustify className="mr-2" />
                    Top Features
                  </li>

                  <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                    <FaCheckDouble className="w-4" />
                    <span className="w-full">Full content library</span>
                  </li>

                  <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                    <FaCheckDouble className="w-4" />
                    <span className="w-full">
                      Access on up to four devices simultaneously
                    </span>
                  </li>

                  <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                    <FaCheckDouble className="w-4" />
                    <span className="w-full">
                      Ultra HD video quality (up to 4K)
                    </span>
                  </li>

                  <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                    <FaCheckDouble className="w-4" />
                    <span className="w-full">
                      Exclusive early access to new releases and original
                      content
                    </span>
                  </li>
                </ul>
                <hr />
                <Link to="/payment">
                  <button
                    onClick={() => handlePlanSelection('premium', 49.99)}
                    className="w-full text-red-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4"
                  >
                    Choose Plan
                  </button>
                </Link>
              </div>
            </div>

            {/* Ultra Premium */}
            <div className="w-full p-6 text-white glass mb-10 md:mb-0 flex flex-col">
              <h3 className="text-lg">Ulta Premium</h3>
              <div className=" text-white mt-5">
                <small className="line-through">$399.96</small>
                <span className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                  SAVE 75%
                </span>

                <h1 className="mt-4">
                  $<span className="text-3xl font-bold">99.99 </span>/month
                  <p className="text-blue-400 text-lg">+2 months FREE</p>
                </h1>
              </div>
              <p className="font-thin text-sm text-left pt-2 pb-4">
                Complete library, 4K quality, ad-free, shared on six devices.
              </p>
              <hr />
              <ul className="pb-4 flex-1">
                <li className="flex items-center font-thin mt-2">
                  <FaAlignJustify className="mr-2" />
                  Top Features
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">Full content library</span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    Simultaneous access on multiple devices (up to six)
                  </span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    Ultra HD video quality (up to 4K)
                  </span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                    Customizable profiles for each family member
                  </span>
                </li>
              </ul>
              <hr />
              <Link to="/payment">
                <button
                  onClick={() => handlePlanSelection('ultraPremium', 99.99)}
                  className="w-full text-red-700 border border-red-700 rounded font-semibold hover:bg-red-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4"
                >
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
