import { useNotification } from "../../hooks/useNotification.js";

const ImportTextFile = ({ handleEncodeText }) => {
  const { showError, showSuccess } = useNotification();

  const handleImportFile = async ({
    target: {
      files: [importedFile],
    },
  }) => {
    try {
      const importedText = await importedFile.text();
      handleEncodeText(importedText);
      showSuccess("Texto importado com sucesso!");
    } catch ({ message }) {
      showError("Erro ao importar aquivo. Tente novamente");
      throw new Error(message);
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
