export const App = () => {
  const [counter, setCounter] = React.useState(1);

  const handleAlertUser = () => {
    setCounter((old) => old + 1);
  };

  return (
    <React.Fragment>
      <h1>Hello World!!!</h1>
      <button onClick={handleAlertUser}>Alertar</button>
      <h1>Total de alertas: {counter}</h1>
    </React.Fragment>
  );
};
