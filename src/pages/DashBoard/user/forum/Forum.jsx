import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useForumQueries from '../../../../hooks/useForumQueries';
import { setForumTopic } from '../../../../store/slices/forumTopicSlice/forumTopicSlice';
import { setQueries } from '../../../../store/slices/searchSlice/searchSlice';
import QueryContent from './QueryContent';
import SearchSlot from './SearchSlot';
import AskQueryModal from './askQuery/AskQueryModal';
import TopicAside from './topicAside/TopicAside';

const Forum = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [queries, loading] = useForumQueries();
  const [page, setPage] = useState(1);
  const queriesPerPage = 10;
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.searchQuery);
  const filteredQueries = useSelector((state) => state.search.filteredQueries);
  console.log(filteredQueries);

  useEffect(() => {
    if (!loading) {
      dispatch(setQueries(queries));
    }
  }, [loading, queries, dispatch]);

  // PAGINATION FUNC:
  const queriesToDisplay = searchQuery === ' ' ? queries : filteredQueries;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const initialDisplayedQueries = queries.slice(0, queriesPerPage);

  const displayedQueries = queriesToDisplay.slice(
    (page - 1) * queriesPerPage,
    page * queriesPerPage
  );

  // FORUM TOPIC HANDLER:
  const handleTopicClick = (topic) => {
    dispatch( setForumTopic( topic ) );
    setPage(1)
  }

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* Forum Header */}
      <div className="ustify-center z-10 top-2 flex flex-row items-center md:justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="hidden md:flex text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 px-2 md:px-5">
          Cyco Forum
        </p>

        {/* Search Module Slot */}
        <SearchSlot />
      </div>

      <div className="sticky top-0 pt-2 md:mt-2 gap-2 md:gap-3 flex flex-col-reverse md:flex-row justify-between">
        {/* Forum Posts */}
        <div className="min-h-[100vh] bg-zinc-900 p-1 md:p-2 md:w-3/4 h-ful flex flex-col justify-between gap-2 rounded-sm">
          <div>
            {/* Ask Query Slot */}
            <div className="flex justify-end pr-2 pb-2 border-b border-zinc-800">
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
                      <QueryContent query={query} key={index} />
                    ))
                  : filteredQueries.map((query, index) => (
                      <QueryContent query={query} key={index} />
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
        <TopicAside onTopicClic={handleTopicClick} />
      </div>
    </section>
  );
};

export default Forum;
