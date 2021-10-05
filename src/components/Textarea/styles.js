import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    flex: 1,
    maxWidth: '500px',
    height: '90%',
    maxHeight: '400px',
    overflow: 'hidden',
    background: theme.color.white,
    borderRadius: theme.shape,
    boxShadow: theme.elevation['3'],

    '& > textarea': {
      background: 'transparent',
      border: 'none',
      width: '100%',
      height: '100%',
      resize: 'none',
      color: theme.color.purple[400],
      fontSize: '0.8rem',
      margin: 0,
      padding: theme.spacing(),
      outline: 'none',
      fontFamily: theme.font.secondary,
      textTransform: 'uppercase',
    },
  },
}));
