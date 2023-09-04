import React from 'react';

const TopicAside = () => {
  return (
    <aside className="bg-zinc-900 p-1 md:p-2 w-1/4 flex flex-col gap-5 rounded-sm">
      {/* Active Topics */}
      <div className="border-b border-zinc-800 pb-6 py-2">
        <h2 className="text-start text-sm font-bold border-l-4 border-cyred inline-block pl-2">
          Active Topics
        </h2>

        <div className="border rounded-sm border-zinc-800 p-2 mt-2">
          <h3 className="text-sm font-semibold">
            Which one is upcoming series of 'Sepiderman Far From Home'?
          </h3>
          <p className="text-xs text-zinc-500">
            Posted
            <span> 20 minutes </span>
            ago by
            <span> Solo </span>
          </p>
        </div>
        <div className="border rounded-sm border-zinc-800 p-2 mt-2">
          <h3 className="text-sm font-semibold">
            Which one is upcoming series of 'Sepiderman Far From Home'?
          </h3>
          <p className="text-xs text-zinc-500">
            Posted
            <span> 20 minutes </span>
            ago by
            <span> Solo </span>
          </p>
        </div>
        <div className="border rounded-sm border-zinc-800 p-2 mt-2">
          <h3 className="text-sm font-semibold">
            Which one is upcoming series of 'Sepiderman Far From Home'?
          </h3>
          <p className="text-xs text-zinc-500">
            Posted
            <span> 20 minutes </span>
            ago by
            <span> Solo </span>
          </p>
        </div>
      </div>

      {/* Forum Stats */}
      <div className="py-2">
        <h2 className="text-start text-sm font-bold border-l-4 border-cyred inline-block pl-2">
          Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-2">
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
