import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: theme.spacing(1.5),
    background: theme.color.purple[400],
    boxShadow: 'var(--elevation-3)',
  },
  title: {
    marginBottom: 0,
  },
}));
