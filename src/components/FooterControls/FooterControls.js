import AlphabetSelection from "../AlphabetSelection/AlphabetSelection.js";
import ImportTextFile from "../ImportTextFile/ImportTextFile.js";

const FooterControls = ({ handleEncodeText }) => {
  return (
    <section className="alphabet-container">
      <AlphabetSelection />
      <ImportTextFile handleEncodeText={handleEncodeText} />
    </section>
  );
};

export default FooterControls;
