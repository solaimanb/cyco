import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight, FaAngleUp } from 'react-icons/fa';

const TopicAside = () => {
  const [isTopicVisible, setIsTopicVisible] = useState(true);

  const toggleTopicList = () => {
    setIsTopicVisible(!isTopicVisible);
  };

  const forumTopics = [
    'Upcoming Releases',
    'Movie Reviews',
    'Classic Films',
    'Recommendations',
    'Film Trivia',
    'Cinematic Trends',
    'Film Awards',
    'Soundtracks',
    'Movie Collectibles',
    "Director's Corner",
    'Behind-the-Scenes',
    'Movie Quotes',
    'Movie News',
    'Film Festivals',
    'Cinematic Technology',
    'Challenges and Games',
    'Remakes vs. Originals',
  ];

  return (
    <aside className="bg-zinc-900 p-1 md:p-2 md:w-1/4 flex flex-col gap-5 rounded-sm">
      {/* Active Topics */}
      <div className="flex flex-col items-cente justify-between border-b border-zinc-800 pb-6 py-2">
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
          <div className="flex flex-col gap-1 border rounded-sm border-zinc-800 p-2 mt-2">
            {forumTopics.map((topic) => (
              <div className="flex items-center justify-between border rounded-sm bg-zinc-800 p-3 border-zinc-700">
                <h3 className="text-xs font-semibold">{topic}</h3>
                <div className='font-light text-zinc-600'>
                  <FaAngleRight />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Forum Stats */}
      <div className="py-2">
        <h2 className="text-start text-sm font-bold border-l-4 border-cyred inline-block pl-2">
          Stats
        </h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
          <div className="p-2 border rounded-sm border-zinc-800">
            <h3 className="text-sm font-bold text-">84</h3>
            <p className="text-xs">Topics</p>
          </div>
          <div className="p-2 border rounded-sm border-zinc-800">
            <h3 className="text-sm font-bold text-">340</h3>
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
