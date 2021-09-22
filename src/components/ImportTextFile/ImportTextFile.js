import { useCrypt } from "../../hooks/useCrypt.js";
import { useNotification } from "../../hooks/useNotification.js";

const ImportTextFile = ({ setDecodeText, setEncodeText }) => {
  const { showError, showSuccess } = useNotification();
  const { encodeCharacters } = useCrypt();

  const handleImportFile = async ({
    target: {
      files: [importedFile],
    },
  }) => {
    try {
      const importedText = await importedFile.text();

      setEncodeText(importedText);
      encodeText(importedText);
    } catch ({ message }) {
      showError("Erro ao importar aquivo. Tente novamente");
      throw new Error(message);
    }
  };

  const encodeText = (text) => {
    try {
      const encodedText = encodeCharacters({ text });
      setDecodeText(encodedText);
      showSuccess("Texto codificado com sucesso!");
    } catch (e) {
      showError("Falha ao codificar o texto. Tente novamente");
    }
  };

  return (
    <React.Fragment>
      <label
        className="field button button-outline"
        htmlFor="input-import-file"
      >
        importar texto
      </label>
      <input
        type="file"
        id="input-import-file"
        accept=".txt"
        onChange={handleImportFile}
      />
    </React.Fragment>
  );
};

export default ImportTextFile;
