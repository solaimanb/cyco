// CommentBox.js
import React from 'react';

const CommentBox = () => {
  return (
    <div className="mt-4">
      <textarea
        placeholder="Write your comment..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-900"
      ></textarea>
      <button className="mt-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
        Submit
      </button>
    </div>
  );
};

export default CommentBox;

