import Controls from "./components/Controls/Controls.js";
import { CryptProvider } from "./context/CryptContext.js";
import FooterControls from "./components/FooterControls/FooterControls.js";

export const App = () => {
  return (
    <CryptProvider>
      <Controls />
      <FooterControls />
    </CryptProvider>
  );
};
