import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    maxWidth: theme.maxContainerWidth.lg,
    margin: 'auto',
    padding: `0 ${theme.spacing(4)}`,
  },
  backdrop: {
    height: '100%',
    width: '100%',
    background:
      'url(//www.devmedia.com.br/view/img/grid.png),linear-gradient(to right, rgba(0, 126, 174, 0.85), rgba(26, 193, 187, 0.85))',
  },
  mainSection: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: '400px',
    gap: theme.spacing(2),
  },
}));
