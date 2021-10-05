import { useTheme } from 'react-jss';
import { Typography } from '../Typography';
import useStyles from './styles';

export const HeaderPage = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <header className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Encriptador Cifra de Cesar
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.subtitle}
        color="secondary"
      >
        Criptografe facilmente seus textos com apenas um clique!
      </Typography>
    </header>
  );
};
