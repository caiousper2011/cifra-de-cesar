import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  '@keyframes notification_show': {
    from: {
      transform: 'translateX(-100%)',
    },
    to: {
      transform: 'translateX(0)',
    },
  },
  '@keyframes notification_hide': {
    from: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    to: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
  },
  container: {
    width: `(calc(100% - ${theme.spacing(2)}))`,
    height: '80px',
    boxShadow: theme.elevation['3'],
    background: theme.color.black,
    color: theme.color.white,
    position: 'fixed',
    bottom: theme.spacing(),
    left: theme.spacing(),
    right: theme.spacing(),
    borderRadius: theme.shape,
    fontSize: '1.1rem',
    fontWeight: 300,
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.spacing(2)}`,
    '&.error': {
      background: theme.color.warn,
    },
    '&.success': {
      background: theme.color.success,
    },
    '&.show': {
      animation: '0.4s cubic-bezier(0, 1.03, 0.66, 1.1) $notification_show',
    },
    '&.hide': {
      animation:
        '0.4s cubic-bezier(0, 1.03, 0.66, 1.1) $notification_hide forwards',
    },
  },
}));
