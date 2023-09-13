import React from 'react';
import Divider from '../../components/divider/Divider';

const NotificationsDropdown = ({
  notificationCount,
  notificationHistory,
  onClose,
}) => {
  return (
    <div className="notification-dropdown absolute z-20 bg-black/60 rounded-lg p-4 text-sky-700">
      <h3>My Notifications</h3>
      <ul>
        {notificationHistory.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
      <Divider />
      <button className="text-cyred" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default NotificationsDropdown;
