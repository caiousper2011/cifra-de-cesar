import { CryptProvider } from "./context/CryptContext.js";
import { NotificationProvider } from "./NotificationContext.js";

const ProvidersContainer = ({ children }) => {
  return (
    <NotificationProvider>
      <CryptProvider>{children}</CryptProvider>
    </NotificationProvider>
  );
};

export default ProvidersContainer;
