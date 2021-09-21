export const CryptContext = React.createContext({
  rotateNumber: 1,
});

export const CryptProvider = ({ children }) => {
  const [rotateNumber, setRotateNumber] = React.useState(1);

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
