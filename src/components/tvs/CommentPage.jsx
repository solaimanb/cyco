
import React, { useState } from 'react';

import Comments from './Comments';

const CommentPage = () => {
  const [comments, setComments] = useState([
    { id: 1, author: 'User1', text: 'Great video!' },
    { id: 2, author: 'User2', text: 'Thanks for sharing!' },
    { id: 3, author: 'User2', text: 'I just subscribed and while its a nice change from Netflix, the streaming is fn annoying Video keeps stopping !' },
    { id: 4, author: 'User2', text: 'Solaiman Badsha bro if you want please customize your wish!' },
    // Add more comments here
  ]);

  const addComment = (author, text) => {
    const newComment = { id: comments.length + 1, author, text };
    setComments([...comments, newComment]);
  };

  return (
    <div className="mt-4">
     
     <div className="mb-4">
  <div className="flex border-b border-gray-300 pb-2">
    <input
      type="text"
      placeholder="Add a comment..."
      className="flex-grow px-4 py-2 rounded-none focus:outline-none"
    />
    <button
      className=" text-white px-4 py-2 bg-red-900 rounded-none hover:bg-red-600 focus:outline-none "
    >
      Comment
    </button>
  </div>
</div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            author={comment.author}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentPage;