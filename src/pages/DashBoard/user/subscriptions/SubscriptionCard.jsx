import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSelectedPlan } from '../../../../store/slices/paymentSlice/paymentSlice';

const SubscriptionCard = ( {plan} ) => {
  const dispatch = useDispatch();

console.log(plan);
  const handlePlanSelection = (selectedPlan, amount) => {
    dispatch(updateSelectedPlan({ selectedPlan, amount }));
  };

  return (
    <div className="flex flex-col justify-between bg-zinc-800 w-full mx-auto p-6 py-10 space-y-10 rounded-sm shadow-sm">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">{plan?.title}</h2>
          <p className="text-lg text-green-500">
            ${plan?.price} / month
          </p>
        </div>
        
        <div className="mt-6">
          <ul className="text-gray-300 text-xs lg:text-sm">
            
              <li className="flex items-start mb-2">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-green-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12l5 5L19 7"></path>
                </svg>
                <span>{plan?.feature1}</span>
              </li>
              <li className="flex items-start mb-2">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-green-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12l5 5L19 7"></path>
                </svg>
                <span>{plan?.feature2}</span>
              </li>
              <li className="flex items-start mb-2">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-green-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12l5 5L19 7"></path>
                </svg>
                <span>{plan?.feature3}</span>
              </li>
              <li className="flex items-start mb-2">
                <svg
                  className="w-5 h-5 mt-1 mr-2 text-green-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 12l5 5L19 7"></path>
                </svg>
                <span>{plan?.feature4}</span>
              </li>
        
          </ul>
        </div>
      </div>
      
      <div className="mt-5 text-center">
        <Link to={'/payment'}>
          <button
            onClick={() => handlePlanSelection(plan?.title, plan?.price)}
            className="btn-sm w-full bg-cyred text-white font-semibold rounded-sm focus:outline-none focus:ring focus:ring-zinc-900"
          >
          Subscribe Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
