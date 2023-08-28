import React from 'react';

const UsersHome = () => {
  return (
    <div className="dashBoard-bg">
      <div className="flex items-center mb-4">
        <img
          src={""}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Name</h3>
          <p className="text-gray-600">Bio</p>
        </div>
      </div>
    </div>
  );
};

export default UsersHome;
