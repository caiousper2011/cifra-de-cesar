import { createUseStyles } from 'react-jss';

export default createUseStyles((theme) => ({
  typography: {
    fontFamily: theme.font.main,
    color: theme.color.textPrimary,
    margin: 0,
    '&.primary': {
      color: theme.color.textPrimary,
    },
    '&.secondary': {
      color: theme.color.textSecondary,
    },
    '&.accent': {
      color: theme.color.textAccent,
    },
  },
  h2: {
    fontSize: '3.75rem',
    fontWeight: 300,
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
    marginBottom: '0.35em',
  },
  h6: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    marginBottom: '0.35em',
  },
  subtitle1: {
    fontFamily: theme.font.secondary,
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.00938em',
    marginBottom: '0.35em',
  },
}));
