import { CryptProvider } from './CryptContext';
import { NotificationProvider } from './NotificationContext';

const ProvidersContainer = ({ children }) => (
  <NotificationProvider>
    <CryptProvider>{children}</CryptProvider>
  </NotificationProvider>
);

export default ProvidersContainer;
