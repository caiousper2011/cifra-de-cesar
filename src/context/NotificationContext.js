const NOTIFICATION_TYPE = {
  ERROR: "error",
};

export const NotificationContext = React.createContext({});

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = React.useState(false);
  const [notificationType, setNotificationType] = React.useState("");

  const showError = (message) => {
    setNotification(message);
    setNotificationType(NOTIFICATION_TYPE.ERROR);
  };

  return (
    <NotificationContext.Provider
      value={{
        showError,
        notification,
        notificationType,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
