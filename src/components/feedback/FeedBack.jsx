import React from 'react';

const FeedBack = () => {
  return (
    <div className="w-[80%] md:w-[60%] mx-auto flex justify-end">
      <div className="flex flex-col justify-end">
        <h3 className="text-xl font-bold italic text-gray-400 text-end">
          Leave a feedback <br /> to Grow Us:
        </h3>

        <div className="">
          <textarea
            className="w-full bg-black/60 text-gray-400 p-8 mt-2 border border-gray-700 rounded-sm text-sm md:text-base"
            name="feedBack"
            cols="40"
            rows="3"
          ></textarea>
        </div>

        <div className='bg-cyred skew-y-1'>
          <button className="cyco-btn btn btn-sm text-gray-400 italic uppercase">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
