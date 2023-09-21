import React from "react";

const ContentModal = ({ review, closeModal }) => {
  return (
    <div className="absolute top-10 inset-0 flex items-center justify-center z-50">
      <div className="bg-black/80 w-1/2 p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: review.content }}
        ></div>
        <button
          onClick={closeModal}
          className="bg-cyred/50 hover:bg-cyred/60 px-2 rounded-lg"
        >
          <span className="text-sm">Close</span>
        </button>
      </div>
    </div>
  );
};

export default ContentModal;
