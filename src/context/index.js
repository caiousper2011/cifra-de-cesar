import { CryptProvider } from "./context/CryptContext.js";

const ProvidersContainer = ({ children }) => {
  return <CryptProvider>{children}</CryptProvider>;
};

export default ProvidersContainer;
