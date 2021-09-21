import { useNotification } from "../../hooks/useNotification";

const Notification = () => {
  const { notification, notificationType } = useNotification();
  const [hideNotification, setHideNotification] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setHideNotification("hide");
    }, 3000);
  }, [setHideNotification]);

  return (
    <React.Fragment>
      {notification && (
        <div
          className={`notification-container ${notificationType} ${
            hideNotification || "show"
          }`}
        >
          {notification}
        </div>
      )}
    </React.Fragment>
  );
};

export default Notification;
