import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateSelectedPlan } from '../../../../store/slices/paymentSlice/paymentSlice';

const SubscriptionCard = ({ title, price, features, buttonText }) => {
  const dispatch = useDispatch();
  console.log(title, price);

  const handlePlanSelection = (selectedPlan, amount) => {
    dispatch(updateSelectedPlan({ selectedPlan, amount }));
  };

  return (
    <div className="flex flex-col justify-between bg-zinc-800 w-full mx-auto p-6 py-10 space-y-10 rounded-sm shadow-sm">
      <div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-lg text-green-500">
            ${price} / month
          </p>
        </div>
        
        <div className="mt-6">
          <ul className="text-gray-300 text-xs lg:text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start mb-2">
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
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-5 text-center">
        <Link to={'/payment'}>
          <button
            onClick={() => handlePlanSelection(title, price)}
            className="btn-sm w-full bg-cyred text-white font-semibold rounded-sm focus:outline-none focus:ring focus:ring-zinc-900"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
