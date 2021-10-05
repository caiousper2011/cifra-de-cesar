import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  container: {
    fontFamily: theme.font.main,
    color: theme.color.white,
  },
  h1: { fontSize: '4.33rem', fontWeight: 500 },
  h6: {
    fontWeight: 100,
    fontFamily: theme.font.secondary,
    color: theme.color.purple[200],
  },
}));
