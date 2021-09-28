import { useNotification } from "../../hooks/useNotification";
import { classes } from "./Notification.styles.js";
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
          className={`${classes.container} ${classes[notificationType]} ${
            classes[hideNotificationClass || "show"]
          }`}
        >
          {notification}
        </div>
      )}
    </React.Fragment>
  );
};

export default Notification;
