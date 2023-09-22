// CommentSection.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Comment from './Comment';

const CommentSection = () => {
  const { user } = useContext(AuthContext);
  const [newComment, setNewComment] = useState('');

  const [comments, setComments] = useState([
    { id: 1, author: 'Naim', text: 'Great video!' },
    { id: 2, author: 'Kabir', text: 'Thanks for sharing!' },
    {
      id: 3,
      author: 'Anisha',
      text: 'CyCo Man Solaiman Badshah he is crazy Person!',
    },
    {
      id: 4,
      author: 'Raihan',
      text: 'Solaiman Badsha bro, customize it as you wish!',
    },
  ]);

  const addComment = () => {
    if (newComment.trim() === '') {
      return;
    }

    const updatedComments = [
      { id: comments.length + 1, author: user?.displayName, text: newComment },
      ...comments, // Place the new comment at the beginning
    ];

    setComments(updatedComments);
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <div className="flex border-b-4 border-zinc-800/50 pb-4">
        <input
          id="comments"
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

      <div className="space-y-4 mt-5">
        {comments.map((comment) => (
          <Comment
            key={comment?.id}
            author={comment?.author}
            text={comment?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
