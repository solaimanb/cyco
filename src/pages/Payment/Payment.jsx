import React from 'react';

const Payment = () => {
  // Function to format the date as "MMM DD, YYYY"
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const currentDate = formatDate(new Date());

  return (
    <div className="flex justify-center items-center min-h-screen backdrop-filter bg-zinc-950">
      <div className="w-full max-w-md p-6 bg-white bg-opacity-80 shadow-md rounded-sm backdrop-blur-xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Details</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input type="text" className="mt-1 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="mb-4 md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
              <input type="text" className="mt-1 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div className="mb-4 md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input type="text" className="mt-1 p-2 w-full border focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full transition duration-300 border-2 border-black bg-zinc-100 text-black font-bold"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
