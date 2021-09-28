import { classes } from "./HeaderPage.styles.js";

const HeaderPage = () => {
  return (
    <header className={classes.container}>
      <h1 className={classes.title}>Encriptador Cifra de Cesar</h1>
      <h6 className={classes.subtitle}>
        Criptografe facilmente seus textos com apenas um clique!
      </h6>
    </header>
  );
};

export default HeaderPage;
