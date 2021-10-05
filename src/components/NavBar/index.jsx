import { useTheme } from 'react-jss';
import { Typography } from '../Typography';
import useStyles from './styles';

export const NavBar = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <header className={classes.container}>
      <Typography variant="h6" className={classes.title}>
        Encriptador de Cesar
      </Typography>
    </header>
  );
};
