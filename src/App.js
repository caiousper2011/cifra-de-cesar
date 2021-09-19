import Controls from "./components/Controls/Controls.js";
import FooterControls from "./components/FooterControls/FooterControls.js";
import ProvidersContainer from "./context/index.js";

export const App = () => {
  return (
    <ProvidersContainer>
      <Controls />
      <FooterControls />
    </ProvidersContainer>
  );
};
