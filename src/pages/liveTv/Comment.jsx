import React from 'react';

const Comment = ({ author, text }) => {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <img
        src="https://via.placeholder.com/40"
        alt={`${author}'s profile`}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex-grow">
        <div className="bg-zinc-800/50 rounded-md p-2 space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-sm xl:text-base text-gray-300">
              {author}
            </span>
            <span className="text-xs text-gray-500"></span>
          </div>

          <p className="text-white/80 text-sm xl:text-base">{text}</p>

          <div className="flex items-center">
            <button className="text-xs text-gray-500 hover:text-gray-300">
              Like
            </button>
            <button className="text-xs text-gray-500 hover:text-gray-300 ml-4">
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
