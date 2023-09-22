import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedBack = () => {
  const { user } = useAuth();
  const { displayName, email, photoURL } = user || {};
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();
  const [axiosSecure] = useAxiosSecure();

  const handleSubmit = async () => {
    try {
      const feedbackInfo = {
        feedback,
        displayName,
        email,
        photoURL,
      };

      const feedbackResponse = await axiosSecure.post(
        '/feedbacks',
        feedbackInfo
      );

      console.log(feedbackResponse);

      setFeedback('');

      Swal.fire({
        icon: 'success',
        title: 'Feedback Submitted',
        text: 'Thank you for your feedback!',
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!user || !user?.displayName) {
    navigate('/login');
  }

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
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
          ></textarea>
        </div>

        <div className="bg-cyred skew-y-1">
          <button
            className="cyco-btn btn btn-sm text-gray-400 italic uppercase"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
