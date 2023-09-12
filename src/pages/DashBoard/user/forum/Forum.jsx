import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useForumQueries from '../../../../hooks/useForumQueries';
import { setForumTopic } from '../../../../store/slices/forumTopicSlice/forumTopicSlice';
import { updateQueryViews } from '../../../../store/slices/queriesSlice/queriesSlice';
import { setQueries } from '../../../../store/slices/searchSlice/searchSlice';
import QueryContent from './QueryContent';
import SearchSlot from './SearchSlot';
import AskQueryModal from './askQuery/AskQueryModal';
import TopicAside from './topicAside/TopicAside';
import { selectFilteredQueries } from './topicAside/forumSelectors';

const Forum = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [queries, loading] = useForumQueries();
  const [page, setPage] = useState(1);
  const queriesPerPage = 10;
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredQueries = useSelector((state) => state.search.filteredQueries);
  // console.log(filteredQueries);

  // FORUM FILTERED QUERIES:
  const forumTopicQueries = useSelector(selectFilteredQueries);

  useEffect(() => {
    if (!loading) {
      dispatch(setQueries(queries));
    }
  }, [loading, queries, dispatch]);

  // PAGINATION FUNC:
  // const queriesToDisplay = searchQuery === ' ' ? queries : filteredQueries;

  // const handlePageChange = (newPage) => {
  //   setPage(newPage);
  // };

  // const initialDisplayedQueries = queries.slice(0, queriesPerPage);

  // const displayedQueries = queriesToDisplay.slice(
  //   (page - 1) * queriesPerPage,
  //   page * queriesPerPage
  // );

  // FORUM TOPIC HANDLER:
  const handleTopicClick = (topic) => {
    dispatch(setForumTopic(topic));
    setPage(1);
  };

  // REFRESH:
  const handleRefresh = () => {};

  // COUNT VIEWS:
  // const handleViewClick = async (query) => {
  //   console.log(query);
  //   const viewCount = (query.views += 1);

  //   const saveViewCount = await axiosSecure
  //     .post(`/forumQueries/${query?._id}`, viewCount)
  //     .then((res) => {
  //       if (res?.data?.success) {
  //         dispatch(updateQueryViews(query?._id, viewCount));
  //       } else {
  //         console.log(' Failed to update query views count.');
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Error updating query views', error);
  //     });
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
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* FORUM HEADER */}
      <div className="justify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Forum
        </p>

        {/* SEARCH MODULE */}
        <SearchSlot />
      </div>

      <div className="sticky top-0 pt-2 md:mt-2 gap-2 md:gap-3 flex flex-col-reverse md:flex-row justify-between">
        {/* FORUM POST */}
        <div className="min-h-[100vh] bg-zinc-900 p-1 md:p-2 md:w-3/4 h-ful flex flex-col justify-between gap-2 rounded-sm">
          <div>
            
            {/* ASK QUERY SLOT */}
            <div className="flex justify-end items-center px-2 pb-2 border-b border-zinc-800">
              <button
                onClick={handleRefresh}
                className="hidden btn btn-sm border-zinc-800 rounded-sm items-center gap-1 text-sm"
              >
                <IoMdRefresh /> Refresh
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row items-center gap-2 border border-zinc-700 bg-zinc-800 rounded-sm w-fit p-2"
              >
                <FaPlus className="text-cyred" />
                <h3 className="text-sm">Ask Query</h3>
              </button>
              <AskQueryModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {/* Query Content */}
            {loading ? (
              <div className="flex items-center justify-center">
                {/* <Loading /> */}
                Fetching Queries...
              </div>
            ) : (
              /* Render query content when queries are available */
              <div className="flex flex-col-reverse gap-1 md:p-2">
                {/* {searchQuery === ''
                  ? initialDisplayedQueries.map((query, index) => (
                      <QueryContent query={query} key={index} />
                    ))
                  : displayedQueries.map((query, index) => (
                      <QueryContent query={query} key={index} />
                    ))} */}

                {searchQuery === ''
                  ? queries.map((query, index) => (
                      <QueryContent
                        // onClick={() => handleViewClick(query)}
                        query={query}
                        key={index}
                      />
                    ))
                  : filteredQueries.map((query, index) => (
                      <QueryContent
                        // onClick={() => handleViewClick(query)}
                        query={query}
                        key={index}
                      />
                    ))}
              </div>
            )}
          </div>

          {/* PAGINATION */}
          {/* <div>
            <Pagination
              currentPage={page}
              totalPages={Math.ceil(queriesToDisplay.length / queriesPerPage)}
              onPageChange={handlePageChange}
            />
          </div> */}
        </div>

        {/* Topic Aside */}
        <TopicAside />
        {/* <TopicAside onTopicClick={handleTopicClick} /> */}
      </div>
    </section>
  );
};

export default Forum;
