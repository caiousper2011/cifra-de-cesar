import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '140px',
    background: theme.color.white,
    alignSelf: 'center',
    transform: 'translateY(-20px)',
    width: '48px',
    borderRadius: theme.shape,
    boxShadow: theme.elevation['3'],
    overflow: 'hidden',
    '& > * ': {
      flex: 1,
      border: 'none',
      borderRadius: 0,
    },
    '&.button': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
    },
    '& > * + *': {
      borderTop: `solid 1px ${theme.color.purple['400']}`,
    },
  },
}));
