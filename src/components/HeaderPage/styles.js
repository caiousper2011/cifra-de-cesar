import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: `${theme.spacing(6)} 0`,
  },
  title: {
    marginBottom: '0.8rem',
  },
}));
