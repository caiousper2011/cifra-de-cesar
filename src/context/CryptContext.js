const CryptContext = React.createContext({
  rotateNumber: 1,
});

export const CryptProvider = ({ children }) => {
  const [rotateNumber, setRotateNumber] = React.useState(1);

  console.log(rotateNumber);
  const encode = () => {
    console.log("encode");
  };

  const decode = () => {
    console.log("decode");
  };

  return (
    <CryptContext.Provider
      value={{
        encode,
        decode,
        rotateNumber,
        handleRotateNumber: setRotateNumber,
      }}
    >
      {children}
    </CryptContext.Provider>
  );
};

export const useCrypt = () => {
  const context = React.useContext(CryptContext);

  return context;
};
