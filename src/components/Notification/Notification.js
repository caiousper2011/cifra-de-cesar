import { useNotification } from "../../hooks/useNotification";
const CLOSE_DELAY = 5000;

const Notification = () => {
  const { notification, notificationType, hideNotification } =
    useNotification();
  const [hideNotificationClass, setHideNotificationClass] = React.useState("");

  React.useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setHideNotificationClass("hide");
        hideNotification();
      }, CLOSE_DELAY);
    } else {
      setHideNotificationClass("");
    }
  }, [setHideNotificationClass, hideNotification, notification]);

  return (
    <React.Fragment>
      {notification && (
        <div
          className={`notification-container ${notificationType} ${
            hideNotificationClass || "show"
          }`}
        >
          {notification}
        </div>
      )}
    </React.Fragment>
  );
};

export default Notification;
