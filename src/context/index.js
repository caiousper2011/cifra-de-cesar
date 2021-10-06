import { ThemeProvider } from 'react-jss';
import { theme } from '../theme';
import { CryptProvider } from './CryptContext';
import { NotificationProvider } from './NotificationContext';

const ProvidersContainer = ({ children }) => (
  <ThemeProvider theme={theme}>
    <NotificationProvider>
      <CryptProvider>{children}</CryptProvider>
    </NotificationProvider>
  </ThemeProvider>
);

export default ProvidersContainer;
