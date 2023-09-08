// CommentSection.js
import React, { useState } from 'react';
import Comment from './Comment';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const CommentSection = () => {
  const {user} = useContext(AuthContext);
  // console.log(user);
  const [comments, setComments] = useState([
    { id: 1, author: 'Naim', text: 'Great video!' },
    { id: 2, author: 'Kabir', text: 'Thanks for sharing!' },
    { id: 3, author: 'Anisha', text: 'CyCo Man Solaiman Badshah he is crazy Person!' },
    { id: 4, author: 'Raihan', text: 'Solaiman Badsha bro, customize it as you wish!' },
    // Add more comments here
  ]);

  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim() === '') {
      return; // Don't add empty comments
    }
  
    const updatedComments = [
      { id: comments.length + 1, author:user.displayName , text: newComment },
      ...comments, // Place the new comment at the beginning
    ];
  
    setComments(updatedComments);
    setNewComment('');
  };


  return (
    <div className="mt-4">

      <div className="mb-4">
        <div className="flex border-b border-gray-300 pb-2">
          <input
            id='comments'
            type="text"
            placeholder="Add a comment..."
            className="flex-grow px-4 py-2 rounded-none focus:outline-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="text-white px-4 py-2 bg-red-900 rounded-none hover:bg-red-600 focus:outline-none"
            onClick={addComment}
          >
            Comment
          </button>
        </div>
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
