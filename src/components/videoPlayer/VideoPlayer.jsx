import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { IoSendSharp } from "react-icons/io5";
import Loading from "../loading/Loading";
import {
  addComment,
  loadComments,
} from "../../store/slices/commentSlice/commentSlice";

const VideoPlayer = ({ channel }) => {
  if (!channel) {
    return <Loading />;
  }
  console.log(channel);
  const [axiosSecure] = useAxiosSecure();
  const [commentInput, setCommentInput] = useState("");
  const [initialComments, setInitialComments] = useState([]);
  const dispatch = useDispatch();
  const _id = channel._id;
  const comments = useSelector((state) => state.comments[_id]);
  console.log(initialComments, comments);

  useEffect(() => {
    const hasUserUpvoted = localStorage.getItem(`userUpvotedQuery_${_id}`);

    if (hasUserUpvoted) {
      setUpvoted(true);
    }

    // FETCHING QUERY COMMENTS:
    const fetchComments = async () => {
      try {
        const response = await axiosSecure.get(`/forumQueries/comments/${_id}`);

        if (response.status === 200 && response.data.success) {
          const fetchedComments = response.data.comments;
          dispatch(loadComments({ queryId: _id, comments: fetchedComments }));
          setInitialComments(fetchedComments);
        } else {
          console.log("Failed to load comments!");
        }
      } catch (error) {
        console.error("Error loading comments:", error);
      }
    };

    fetchComments();
  }, []);

  // COMMENT INPUT FIELD OBSERVER:
  const handleCommentChange = (event) => {
    const inputText = event.target.value;

    if (!inputText.trim()) {
      setCommentInput("");
    } else {
      setCommentInput(inputText);
    }
  };

  // COMMENT SUBMISSION:
  const handleCommentSubmit = async () => {
    if (commentInput.trim() === "") {
      return;
    }

    try {
      const response = await axiosSecure.post(`/forumQueries/comments/${_id}`, {
        comment: commentInput,
        timestamp: new Date().getTime(),
      });

      // setCommentInput('');
      if (response.status === 200 && response.data.success) {
        const newComment = response.data.comment;
        setInitialComments([...initialComments, newComment]);
        dispatch(addComment({ queryId: _id, comment: newComment }));

        // Clear the input field after submission
      } else {
        console.log("Failed to add comment!");
      }
    } catch (error) {
      console.log("Error adding comment:", error);
    }
  };
  return (
    <>
      <div className="h-full w-full rounded-sm relative">
        {channel ? (
          <div className="relative" style={{ paddingBottom: "66.25%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${channel?.LiveKey}`}
              width="100%"
              height="100%"
              controls
              playing // Auto-play the video
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div>
        ) : (
          <p>Select a channel to start playing.</p>
        )}
        {channel && (
          <div className="absolute top-2 right-2 text-red-600  py-1 px-2 rounded-sm text-sm cursor-pointer">
            Live
          </div>
        )}
      </div>

      {/* Comment section */}
      <div className="flex flex-row items-center justify-between px-1 mt-5">
        <div className="w-[60%] flex flex-row items-center gap-2">
          <div className="relative w-full flex items-center gap-2">
            <input
              type="text"
              placeholder="comment.."
              className="w-full bg-zinc-800 p-1 rounded-full px-2 font-light focus:outline-none text-sm"
              onChange={handleCommentChange}
            />
            <button
              type="submit"
              className="bg-white"
              onClick={handleCommentSubmit}
            >
              <IoSendSharp
                size={20}
                className="absolute right-4 top-1 text-cyred"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-1 pt-1 border-t-2 border-zinc-800 gap-1">
        {initialComments &&
          initialComments.map((comment, index) => (
            <div
              key={index}
              className="flex flex-row gap-3 items-start bg-zinc-800/60 p-3 rounded-sm"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqrPeW8qKDv2TucX76nWLgPFbAZN9Ke3-5w&usqp=CAU"
                alt="user-image"
                className="w-6 h-6 rounded-full opacity-60"
              />
              <p className="text-xs font-normal">{comment}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default VideoPlayer;
