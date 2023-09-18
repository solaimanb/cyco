import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io.connect(`${import.meta.env.VITE_SERVER_URL}`);

const ReceiveNotification = () => {
  const [nCount, setNCount] = useState(0);
  const [receiveNotification, setReceiveNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationHistory, setNotificationHistory] = useState([]);

  // Load notification history from local storage on component mount
  useEffect(() => {
    const savedNotificationHistory = JSON.parse(localStorage.getItem('notificationHistory'));
    if (savedNotificationHistory) {
      setNotificationHistory(savedNotificationHistory);
    }

    socket.on('receive_notification', (data) => {
      setReceiveNotification(data.notification);
      setNCount((prevCount) => prevCount + 1);
      setShowNotification(showNotification);
      
      // Update notification history and store it in local storage
      const updatedHistory = [data.notification, ...notificationHistory];
      setNotificationHistory(updatedHistory);
      localStorage.setItem('notificationHistory', JSON.stringify(updatedHistory));
    });
  }, [socket]);

  const handleShowNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center text-white'>
      <div className='bg-sky-700 px-16 py-16 rounded w-1/4'>
        {showNotification ? (
          <p className='text-cyred'>{receiveNotification}</p>
        ) : (
          <p className='text-cyred'>{nCount}</p>
        )}
        {/* Display previous notifications only when showNotification is true */}
        {showNotification && (
          <ul>
            {notificationHistory.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        )}
      </div>

      <div className='my-4'>
        <button onClick={handleShowNotificationClick} className='bg-sky-700 px-8 py-1 rounded-lg'>
          {showNotification ? 'Close Notification' : 'Show Notification'}
        </button>
      </div>
    </div>
  );
};

export default ReceiveNotification;
