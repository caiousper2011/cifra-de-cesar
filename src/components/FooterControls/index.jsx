import AlphabetSelection from '../AlphabetSelection';
import ImportTextFile from '../ImportTextFile';

export const FooterControls = ({ setEncodeText, setDecodeText }) => (
  <section className="alphabet-container">
    <AlphabetSelection />
    <ImportTextFile
      setEncodeText={setEncodeText}
      setDecodeText={setDecodeText}
    />
  </section>
);
