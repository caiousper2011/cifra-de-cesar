import Controls from "./components/Controls/Controls.js";
import HeaderPage from "./components/HeaderPage/HeaderPage.js";
import Textarea from "./components/Textarea/Textarea.js";
import NavBar from "./components/NavBar/NavBar.js";
import ProvidersContainer from "./context/index.js";
import FooterControls from "./components/FooterControls/FooterControls.js";
import Notification from "./components/Notification/Notification.js";

export const App = () => {
  const [encodeText, setEncodeText] = React.useState("");
  const [decodeText, setDecodeText] = React.useState("");

  return (
    <ProvidersContainer>
      <NavBar />
      <main>
        <div className="backdrop">
          <div className="container">
            <section className="main-section">
              <HeaderPage />
              <main className="content">
                <Textarea text={encodeText} handleText={setEncodeText} />
                <Controls />
                <Textarea text={decodeText} handleText={setDecodeText} />
              </main>
            </section>
          </div>
        </div>
        <FooterControls handleEncodeText={setEncodeText} />
      </main>
      <Notification />
    </ProvidersContainer>
  );
};
