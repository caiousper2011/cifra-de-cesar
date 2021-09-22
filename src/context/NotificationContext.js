import { NOTIFICATION_TYPE } from "../enum/notification-type.js";

const TIMEOUT_DELAY = 400;

export const NotificationContext = React.createContext({});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = React.useState(false);
  const [notificationType, setNotificationType] = React.useState("");

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
      setNotification("");
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
