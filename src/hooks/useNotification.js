import { NotificationContext } from "../context/NotificationContext";

export const useNotification = () => {
  const context = React.useContext(NotificationContext);

  return context;
};
