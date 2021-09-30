import { useState, useEffect } from 'react';
import { useNotification } from '../../hooks/useNotification';

const CLOSE_DELAY = 5000;

export const Notification = () => {
  const { notification, notificationType, hideNotification } =
    useNotification();
  const [hideNotificationClass, setHideNotificationClass] = useState('');

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setHideNotificationClass('hide');
        hideNotification();
      }, CLOSE_DELAY);
    } else {
      setHideNotificationClass('');
    }
  }, [setHideNotificationClass, hideNotification, notification]);

  return (
    <>
      {notification && (
        <div
          className={`notification-container ${notificationType} ${
            hideNotificationClass || 'show'
          }`}
        >
          {notification}
        </div>
      )}
    </>
  );
};
