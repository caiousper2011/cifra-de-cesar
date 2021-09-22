import AlphabetSelection from "../AlphabetSelection/AlphabetSelection.js";
import ImportTextFile from "../ImportTextFile/ImportTextFile.js";

const FooterControls = ({ setEncodeText, setDecodeText }) => {
  return (
    <section className="alphabet-container">
      <AlphabetSelection />
      <ImportTextFile
        setEncodeText={setEncodeText}
        setDecodeText={setDecodeText}
      />
    </section>
  );
};

export default FooterControls;
