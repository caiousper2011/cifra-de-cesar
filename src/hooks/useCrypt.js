import { CryptContext } from "../context/CryptContext";

export const useCrypt = () => {
  const context = React.useContext(CryptContext);

  return context;
};
