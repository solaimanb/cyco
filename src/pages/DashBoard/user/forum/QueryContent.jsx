import { Accordion, AccordionItem } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { IoSendSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { updateQueryViews } from '../../../../store/slices/queriesSlice/queriesSlice';

const QueryPost = ({ query }) => {
  const { _id, description, title, timestamp, views } = query;
  // const date = new Date(timestamp);
  const [timeAgo, setTimeAgo] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const dispatch = useDispatch();
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [voteCount, setVoteCount] = useState(139);

  // SETTING POST TIME:
  useEffect(() => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - timestamp;

    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const weeksAgo = Math.floor(daysAgo / 7);
    const monthsAgo = Math.floor(daysAgo / 30);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      setTimeAgo(`${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`);
    } else if (monthsAgo > 0) {
      setTimeAgo(`${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`);
    } else if (weeksAgo > 0) {
      setTimeAgo(`${weeksAgo} week${weeksAgo === 1 ? '' : 's'} ago`);
    } else if (daysAgo > 0) {
      setTimeAgo(`${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`);
    } else if (hoursAgo > 0) {
      setTimeAgo(`${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`);
    } else {
      setTimeAgo(`${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`);
    }
  }, [timestamp]);

  const handleQueryClick = async (query) => {
    const updatedViewCount = query.views + 1; // Increment the view count locally
    console.log(updatedViewCount);
    // console.log(query);

    try {
      // Send the updated view count to the server
      const response = await axiosSecure.post(`/forumQueries/${query?._id}`, {
        views: updatedViewCount,
      });

      if (response?.data?.success) {
        // Update the view count in the Redux state
        dispatch(updateQueryViews(query?._id, updatedViewCount));
      } else {
        console.log('Failed to update query views count.');
      }
    } catch (error) {
      console.log('Error updating query views', error);
    }

    //
  };

  // COUNT QUERY VOTES HANDLERS:
  const handleUpvoteClick = () => {
    if (!upvoted) {
      try {
        //
        setUpvoted(true);

        if (downvoted) {
          setDownvoted(false);
          setVoteCount(voteCount + 1);
        } else {
          setVoteCount(voteCount + 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDownvoteClick = () => {
    if (!downvoted) {
      try {
        //
        setDownvoted(true);

        if (upvoted) {
          setUpvoted(false);
          setVoteCount(voteCount - 1);
        } else {
          setVoteCount(voteCount - 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      onClick={() => handleQueryClick(query)}
      className="cursor-pointer flex flex-col justify-between gap-2 border rounded-sm border-zinc-800"
    >
      <div>
        <Accordion>
          <AccordionItem title={title} className="w-full font-bold">
            <p className="text-sm font-medium text-zinc-400">{description}</p>

            {/* QUERY UTILITIES  */}
            <div className="flex flex-row items-center justify-between px-1 mt-5">
              <div className="flex flex-row items-center gap-2">
                {/* COMMENT SECTION */}
                <div className="relative flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="comment.."
                    className="bg-zinc-800 p-1 rounded-full px-2 font-light focus:outline-none text-sm"
                  />
                  <IoSendSharp
                    size={20}
                    className="absolute right-4 text-cyred"
                  />
                </div>
              </div>

              <div>
                {/* VOTING BTN'S */}
                <div className="flex flex-row items-center justify-between border border-zinc-500 rounded-full w-36 h-8 px-2 py-0">
                  <button
                    title="upvote"
                    onClick={handleUpvoteClick}
                    className="flex flex-row items-center gap-1"
                    disabled={upvoted}
                  >
                    {upvoted ? (
                      <BiSolidUpvote size={20} />
                    ) : (
                      <BiUpvote size={20} />
                    )}{' '}
                    -<p className="text-xs">{voteCount}</p>
                  </button>

                  <div className="divider divider-horizontal divide-zinc-500"></div>

                  <button
                    title="downvote"
                    onClick={handleDownvoteClick}
                    disabled={downvoted}
                  >
                    {downvoted ? (
                      <BiSolidDownvote size={20} />
                    ) : (
                      <BiDownvote size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex justify-between items-center bg-zinc-800/50 p-1">
        <p className="text-xs text-zinc-500">
          Posted <span> {timeAgo} </span>
          {/*  by{' '}<span> {user?.displayName || 'anonymous'} </span> */}
        </p>
        <div className="flex gap-1 text-zinc-400 items-center">
          <FaEye size={15} />
          <p className="text-xs">{views} views</p>
        </div>
      </div>
    </div>
  );
};

export default QueryPost;
