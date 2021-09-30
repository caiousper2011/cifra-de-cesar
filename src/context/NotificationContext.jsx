import { createContext, useState } from 'react';
import { NOTIFICATION_TYPE } from '../enum/notification-type';

const TIMEOUT_DELAY = 400;

export const NotificationContext = createContext({});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(false);
  const [notificationType, setNotificationType] = useState('');

  const showError = (message) => {
    setNotification(message);
    setNotificationType(NOTIFICATION_TYPE.ERROR);
  };

  const showSuccess = (message) => {
    setNotification(message);
    setNotificationType(NOTIFICATION_TYPE.SUCCESS);
  };

  const hideNotification = () => {
    setTimeout(() => {
      setNotification('');
    }, TIMEOUT_DELAY);
  };

  return (
    <NotificationContext.Provider
      value={{
        showError,
        showSuccess,
        notification,
        notificationType,
        hideNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
