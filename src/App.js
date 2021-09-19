import Controls from "./components/Controls/Controls.js";
import FooterControls from "./components/FooterControls/FooterControls.js";
import Textarea from "./components/Textarea/Textarea.js";
import ProvidersContainer from "./context/index.js";

export const App = () => {
  const [encodeText, setEncodeText] = React.useState("");
  const [decodeText, setDecodeText] = React.useState("");

  return (
    <ProvidersContainer>
      <header>
        <h3>Encriptador de Cesar</h3>
      </header>
      <main>
        <div className="backdrop">
          <div className="container">
            <section className="main-section">
              <header className="header-page">
                <h1 className="title">Encriptador Cifra de Cesar</h1>
                <h6 className="description">
                  Criptografe facilmente seus textos com apenas um clique!
                </h6>
              </header>

              <main className="content">
                <Textarea text={encodeText} handleText={setEncodeText} />
                <Controls />
                <Textarea text={decodeText} handleText={setDecodeText} />
                <FooterControls />
              </main>
            </section>
          </div>
        </div>
        <section className="alphabet-container">
          <select className="field field-outline" type="text" id="alphabet-txt">
            <option value="">Selecione um alfabeto</option>
          </select>
          <label
            className="field button button-outline"
            htmlFor="input-import-file"
          >
            importar texto
          </label>
          <input type="file" id="input-import-file" accept=".txt" />
        </section>
      </main>
    </ProvidersContainer>
  );
};
