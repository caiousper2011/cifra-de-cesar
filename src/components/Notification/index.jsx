import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useNotification } from '../../hooks/useNotification';
import useStyles from './styles';

const CLOSE_DELAY = 5000;

export const Notification = () => {
  const classes = useStyles();

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
          className={classNames({
            [classes.container]: true,
            [notificationType]: true,
            show: !hideNotificationClass,
            [hideNotificationClass]: hideNotificationClass,
          })}
        >
          {notification}
        </div>
      )}
    </>
  );
};
