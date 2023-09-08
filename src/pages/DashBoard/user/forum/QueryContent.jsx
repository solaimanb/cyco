import React, { useEffect, useState } from 'react';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { updateQueryViews } from '../../../../store/slices/queriesSlice/queriesSlice';

const QueryPost = ({ query }) => {
  const { user } = useAuth();
  const { _id, description, title, timestamp } = query;
  const date = new Date(timestamp);
  const [timeAgo, setTimeAgo] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const dispatch = useDispatch();

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

  // // COUNT VIEWS:
  // const handleViewClick = (query) => {
  //   query.views += 1;
  // };

  const handleViewClick = async (query) => {
    const updatedViewCount = query.views + 1; // Increment the view count locally
    console.log(updatedViewCount);

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
  };

  return (
    <div
      onClick={() => handleViewClick(query)}
      className="cursor-pointer flex flex-col md:flex-row justify-between gap-2 p-2 border rounded-sm border-zinc-800"
    >
      <div className="p-2 mt-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-xs text-zinc-500">
          Posted <span> {timeAgo} </span> by{' '}
          <span> {user?.displayName || 'anonymous'} </span>
        </p>
      </div>

      <div className="flex text-center items-center gap-3">
        <div className="">
          <div className="flex justify-center">
            <MdOutlineSignalCellularAlt />
          </div>
          <div className="text-xs text-center text-zinc-400">
            <p>104</p>
            <p>votes</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <TiMessages />
          </div>
          <div className="text-xs text-center text-zinc-400">
            <p>14</p>
            <p>replays</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <FaUsersViewfinder />
          </div>
          <div className="text-xs text-center text-zinc-400">
            <p>{query?.views}</p>
            <p>views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryPost;
