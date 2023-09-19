import { Accordion, AccordionItem } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from 'react-icons/bi';
import { FaComment, FaEye, FaTrashAlt } from 'react-icons/fa';
import { IoSendSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import {
  updateViewCount,
  updateVoteCount,
} from '../../../../store/slices/queriesSlice/queriesSlice';
import formatTimestamp from '../../../../utils/formatTimestamp/formatTimestamp';
import {
  removeQueryObject,
  removeVoteFromDB,
  saveVoteToDB,
} from './actions/queryActions';

const QueryPost = ({ query }) => {
  const { _id, description, title, timestamp, views, comments, voteCount } =
    query;

  const [axiosSecure] = useAxiosSecure();
  const [timeAgo, setTimeAgo] = useState(formatTimestamp(timestamp));
  const [voteType, setVoteType] = useState(null);
  const [initialVoteCount, setInitialVoteCount] = useState(0);
  const [commentInput, setCommentInput] = useState('');
  const [initialComments, setInitialComments] = useState([]);
  const [userData, setUserData] = useState();
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const [viewClicked, setViewClicked] = useState(false);

  const queries = useSelector((state) => state.queries);
  const dispatch = useDispatch();

  // QUERY CLICK HANDLER:(updating the views counter)----->>>>
  const handleQueryClick = async () => {
    if (!viewClicked) {
      const updatedViews = views + 1;
      setViewClicked(true);

      try {
        const response = await axiosSecure.put(`/forumQueries/${_id}`, {
          views: updatedViews,
        });

        if (response.data.success) {
          dispatch(updateViewCount(_id, updatedViews));
        } else {
          console.error('Failed to update view count in the database');
        }
      } catch (error) {
        console.error('Error updating view count:', error);
      }
    }
  };

  const handleVoteClick = async (voteType) => {
    if (voteType === 'upvote') {
      if (!hasUpvoted) {
        const newUpvoteCount = voteCount + 1;
        dispatch(updateVoteCount(_id, newUpvoteCount));
        setHasUpvoted(true);

        if (hasDownvoted) {
          const newDownvoteCount = voteCount - 1;
          dispatch(updateVoteCount(_id, newDownvoteCount));
          setHasDownvoted(false);
          await removeVoteFromDB(_id, 'downvote', newDownvoteCount);
        }

        await saveVoteToDB(_id, 'upvote', newUpvoteCount);
      } else {
        const newUpvoteCount = voteCount - 1;
        dispatch(updateVoteCount(_id, newUpvoteCount));
        setHasUpvoted(false);
        await removeVoteFromDB(_id, 'upvote', newUpvoteCount);
      }
    } else if (voteType === 'downvote') {
      if (!hasDownvoted) {
        const newDownvoteCount = voteCount + 1;
        dispatch(updateVoteCount(_id, newDownvoteCount));
        setHasDownvoted(true);

        if (hasUpvoted) {
          const newUpvoteCount = voteCount - 1;
          dispatch(updateVoteCount(_id, newUpvoteCount));
          setHasUpvoted(false);
          await removeVoteFromDB(_id, 'upvote', newUpvoteCount);
        }

        await saveVoteToDB(_id, 'downvote', newDownvoteCount);
      } else {
        const newDownvoteCount = voteCount - 1;
        dispatch(updateVoteCount(_id, newDownvoteCount));
        setHasDownvoted(false);
        await removeVoteFromDB(_id, 'downvote', newDownvoteCount);
      }
    }
  };

  useEffect(() => {
    setTimeAgo(formatTimestamp(timestamp));
    const hasUserUpvoted = localStorage.getItem(`userUpvotedQuery_${_id}`);

    if (hasUserUpvoted) {
      setUpvoted(true);
    }
  }, []);

  // COMMENT INPUT FIELD OBSERVER:
  const handleCommentChange = (event) => {
    const inputText = event.target.value;

    if (!inputText.trim()) {
      setCommentInput('');
    } else {
      setCommentInput(inputText);
    }
  };

  const handleCommentSubmit = async () => {
    if (commentInput.trim() === '') {
      return;
    }

    try {
      const response = await axiosSecure.post(`/forumQueries/${_id}/comments`, {
        comment: commentInput,
        timestamp: new Date().getTime(),
      });

      // const newComment = { text: commentInput, timestamp: Date.now() };

      // dispatch(addCommentToQueryAsync(_id, newComment));

      // if (response.data.success) {
      //   const newComment = { text: commentInput, timestamp: Date.now() };
      //   dispatch(addCommentToQuery({ queryId: _id, comment: newComment }));

      //   setCommentInput( '' );
      //   setInitialComments( [ ...initialComments, newComment ] );

      // } else {
      //   console.log('Failed to add comment!');
      // }

      setCommentInput('');
      // setInitialComments([...initialComments, newComment]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // DELETE A QUERY:
  const handleDeleteQuery = async (queryId) => {
    try {
      dispatch(removeQueryObject(queryId))
        .unwrap()
        .then((deletedQueryId) => {
          console.log(`Query with ID ${deletedQueryId} deleted successfully.`);
        });
    } catch (error) {
      console.error('Error deleting query:', error);
    }
  };

  // REPORT A QUERY:
  const handleReportQuery = async (queryId) => {
    console.log(queryId);

    const { value } = await Swal.fire({
      text: 'Please select the type of report!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Report Query',
      cancelButtonText: 'Cancel',
      background: '#222',
    });
    console.log(value);

    if (value === true) {
      try {
        const response = await axiosSecure.post('/report/query', { queryId });
        console.log(response);

        if (response.data.success) {
          Swal.fire({
            title: 'Reported Successfully',
            text: 'The query has been reported.',
            icon: 'success',
            background: '#222',
          });
        } else if (
          response.data.message ===
          'Query has already been reported by this user.'
        ) {
          Swal.fire({
            title: 'Already Reported',
            text: 'You have already reported this query.',
            icon: 'info',
            background: '#222',
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Failed to report the query.',
            icon: 'error',
            background: '#222',
          });
        }
      } catch (error) {
        console.error('Error reporting query:', error);
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while reporting the query.',
          icon: 'error',
          background: '#222',
        });
      }
    } else if (value === null) {
      console.log('User canceled the report.');
    }
  };

  return (
    <div
      onClick={() => handleQueryClick()}
      className="cursor-pointer flex flex-col justify-between gap-3 mt-2 border rounded-sm border-zinc-800"
    >
      <Accordion>
        <AccordionItem
          title={title}
          className="flex flex-col justify-between w-full font-semibold"
        >
          <div className="flex flex-col mt-2 pt-1 border-t-2 border-zinc-800 gap-1">
            {/* {initialComments?.map((comment, index) => ( */}
            {comments?.map((comment, index) => (
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

            <div className="flex flex-row items-center justify-between border border-zinc-500 rounded-full w-32 h-8 px-2 py-0">
              <button
                title="upvote"
                onClick={() => handleVoteClick('upvote')}
                disabled={hasUpvoted}
              >
                {hasUpvoted ? (
                  <BiSolidUpvote size={20} />
                ) : (
                  <BiUpvote size={20} />
                )}{' '}
                <p className="text-xs">{voteCount}</p>
              </button>

              <div className="divider divider-horizontal divide-zinc-500"></div>

              <button
                title="downvote"
                onClick={() => handleVoteClick('downvote')}
                disabled={hasDownvoted}
              >
                {hasDownvoted ? (
                  <BiSolidDownvote size={20} />
                ) : (
                  <BiDownvote size={20} />
                )}
              </button>
            </div>

            <div className="flex flex-row items-center gap-1">
              {/* TRASH TRIGGER */}
              <button
                onClick={() => handleDeleteQuery(_id)}
                className="text-[#800000]"
              >
                <FaTrashAlt size={18} />
              </button>

              {/* REPORT TRIGGER */}
              <button
                onClick={() => handleReportQuery(_id)}
                className="text-[#800000]"
              >
                <AiOutlineQuestionCircle size={22} />
              </button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      <div className="flex justify-between items-center bg-zinc-800/50 p-1">
        <p className="text-xs text-zinc-500">
          Posted <span> {timeAgo} </span>
        </p>

        <div className="flex gap-1">
          <div className="badge bg-zinc-900/80 border-none flex gap-1 text-zinc-400 items-center rounded-sm">
            <FaEye size={15} className="text-zinc-300" />
            <p className="text-xs">{views}</p>
          </div>

          <div className="badge bg-zinc-900/80 border-none flex gap-1 text-zinc-400 items-center rounded-sm">
            <FaComment size={15} className="text-zinc-300" />
            <p className="text-xs">{comments && comments?.length}</p>
          </div>

          <div className="badge bg-zinc-900/80 border-none flex gap-1 text-zinc-400 items-center rounded-sm">
            <BiSolidUpvote size={15} className="text-zinc-300" />
            <p className="text-xs">{voteCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QueryPost;
