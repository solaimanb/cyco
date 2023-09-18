import React from 'react';
import { FaAlignJustify, FaCheckDouble } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedPlan } from '../../store/slices/paymentSlice/paymentSlice';
import { fetchItems } from '../../store/slices/subscriptionSlice/subscriptionSlice';

const Subscription = () => {
  const items = useSelector((state) => state.manageSubscriptions);
  console.log(items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch, ]);

  const handlePlanSelection = (selectedPlan, amount) => {
    dispatch(updateSelectedPlan({ selectedPlan, amount }));
  };

  return (
    <div className="hero">
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
            {/* Basic Plan */}
            {
              items && items.map((item, index)=>
               <div key={index} className="w-full p-6 text-white glass mb-10 md:mb-0 flex flex-col">
              <h3 className="text-lg">{item?.title}</h3>
              <div className=" text-white mt-5">
                <small className="line-through">${item.previous_pay}</small>
                <span className=" bg-red-500 text-white rounded-full p-1 ml-2 text-base border-double border-4 border-t-neutral-100">
                  SAVE {item?.save_price}%
                </span>

                <h1 className="mt-4">
                  $<span className="text-3xl font-bold">{item?.price} </span>/month
                  <p className="text-blue-400 text-lg">+{item?.months_free} months FREE</p>
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
                  <span className="w-full"> {item?.feature1}</span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full"> {item?.feature2}</span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                  {item?.feature3}
                  </span>
                </li>

                <li className="flex items-start text-left text-sm gap-2 font-thin mt-2">
                  <FaCheckDouble className="w-4" />
                  <span className="w-full">
                  {item?.feature4}
                  </span>
                </li>
              </ul>
              <hr />
              <div className="group:mb-0">
                <Link to="/payment">
                  {' '}
                  <button
                    onClick={() => handlePlanSelection(item?.title, item?.price)}
                    className="w-full text-red-700 border border-red-700 rounded font-semibold hover:bg-red-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4"
                  >
                    Choose Plan
                  </button>{' '}
                </Link>
              </div>
            </div> 
              )
            }
            

         

          

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
