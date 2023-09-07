import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaAngleUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import useForumQueries from '../../../../../hooks/useForumQueries';
import { setForumTopic } from '../../../../../store/slices/forumTopicSlice/forumTopicSlice';

const TopicAside = () => {
  const [isTopicVisible, setIsTopicVisible] = useState(true);
  const [queries] = useForumQueries();

  const toggleTopicList = () => {
    setIsTopicVisible(!isTopicVisible);
  };

  const forumTopics = [
    { title: 'Upcoming Releases' },
    { title: 'Movie Reviews' },
    { title: 'Classic Films' },
    { title: 'Recommendations' },
    { title: 'Film Trivia' },
    { title: 'Cinematic Trends' },
    { title: 'Film Awards' },
    { title: 'Soundtracks' },
    { title: 'Movie Collectibles' },
    { title: "Director's Corner" },
    { title: 'Behind-the-Scenes' },
    { title: 'Movie Quotes' },
    { title: 'Movie News' },
    { title: 'Film Festivals' },
    { title: 'Cinematic Technology' },
    { title: 'Challenges and Games' },
    { title: 'Remakes vs. Originals' },
  ];

  const dispatch = useDispatch();

  const handleTopicClick = (topic) => {
    dispatch( setForumTopic( topic?.title ) );
    console.log(topic.title);
  };

  return (
    <aside className="bg-zinc-900 p-1 md:p-2 md:w-1/4 flex flex-col gap-2 md:gap-5 rounded-sm">
      {/* Active Topics */}
      <div className="flex flex-col items-cente justify-between border-b border-zinc-800 pb-6 py-2 px-2 md:px-1">
        <div className="flex flex-row justify-between">
          <h2 className="text-start text-sm font-bold border-l-4 border-cyred inline-block pl-2">
            Active Topics
          </h2>
          <div onClick={toggleTopicList}>
            {isTopicVisible ? (
              <FaAngleUp size={20} />
            ) : (
              <FaAngleDown size={20} />
            )}
          </div>
        </div>

        {/* Topic List */}
        {isTopicVisible && (
          <div className="flex flex-col gap-1 border rounded-sm border-zinc-800 p-1 md:p-2 mt-2">
            {forumTopics.map((topic) => (
              <button
                onClick={() => handleTopicClick(topic)}
                className="flex items-center justify-between border rounded-sm bg-zinc-800 p-2 md:p-3 border-zinc-700"
              >
                <h3 className="text-xs font-semibold">{topic?.title}</h3>
                <div className="font-light text-zinc-600">
                  <FaAngleRight />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Forum Stats */}
      <div className="py-2 px-2 md:px-1">
        <h2 className="text-start text-sm font-bold border-l-4 border-cyred inline-block pl-2">
          Stats
        </h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
          <div className="p-2 border rounded-sm border-zinc-800">
            <h3 className="text-sm font-bold text-">{forumTopics?.length}</h3>
            <p className="text-xs">Topics</p>
          </div>
          <div className="p-2 border rounded-sm border-zinc-800">
            <h3 className="text-sm font-bold text-">{queries?.length}</h3>
            <p className="text-xs">Posts</p>
          </div>
          <div className="p-2 border rounded-sm border-zinc-800">
            <h3 className="text-sm font-bold text-">5080</h3>
            <p className="text-xs">Members</p>
          </div>
          <div className="p-2 border rounded-sm border-zinc-800">
            <h3 className="text-sm font-bold text-">2480</h3>
            <p className="text-xs">Topics</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TopicAside;
