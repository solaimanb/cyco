import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import QueryContent from './QueryContent';
import SearchSlot from './SearchSlot';
import TopicAside from './TopicAside';
import AskQueryModal from './askQuery/AskQueryModal';

const Forum = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen p-2 md:p-3 mt-3 lg:mt-0 backdrop-blur-sm bg-zinc-950">
      {/* Forum Header */}
      <div className="flex flex-row items-center justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
        <p className="text-sm md:text-base font-semibold border-l-4 border-cyred ml-2 inline-block px-2 md:px-5">
          Cyco Forum
        </p>

        {/* Search Module Slot */}
        <SearchSlot />
      </div>

      <div className="pt-2 md:mt-2 gap-2 md:gap-3 flex justify-between">
        {/* Forum Posts */}
        <div className="bg-zinc-900 p-1 md:p-2 w-3/4 h-ful flex flex-col gap-2 rounded-sm">
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
          <div className="flex flex-col gap-1 md:p-2">
            <QueryContent />
            <QueryContent />
            <QueryContent />
            <QueryContent />
            <QueryContent />
            <QueryContent />
            <QueryContent />
            <QueryContent />
            <QueryContent />
          </div>
        </div>

        {/* Topic Aside */}
        <TopicAside />
      </div>
    </section>
  );
};

export default Forum;
