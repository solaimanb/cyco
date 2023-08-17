// CommentSection.js
import React, { useState } from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const [comments, setComments] = useState([
    { id: 1, author: 'User1', text: 'Great video!' },
    { id: 2, author: 'User2', text: 'Thanks for sharing!' },
    // Add more comments here
  ]);

  const addComment = (author, text) => {
    const newComment = { id: comments.length + 1, author, text };
    setComments([...comments, newComment]);
  };

  return (
    <div className="mt-4">
     
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button
          className="mt-2 bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
        >
          Add Comment
        </button>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
