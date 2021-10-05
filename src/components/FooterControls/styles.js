import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: theme.color.white,
    width: '100%',
    padding: `${theme.spacing()} ${theme.spacing(2)}`,
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(),
  },
}));
