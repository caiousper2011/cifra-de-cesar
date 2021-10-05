import { useCrypt } from '../../hooks/useCrypt';
import { useNotification } from '../../hooks/useNotification';
import useStyles from './styles';

export const Controls = ({
  encodeText,
  setEncodeText,
  decodeText,
  setDecodeText,
}) => {
  const classes = useStyles();
  const {
    encodeCharacters,
    rotateNumber,
    handleRotateNumber,
    decodeCharacters,
  } = useCrypt();
  const { showError, showSuccess } = useNotification();

  const handleEncode = () => {
    try {
      const encodedText = encodeCharacters({ text: encodeText });
      setDecodeText(encodedText);
      showSuccess('Texto codificado com sucesso!');
    } catch (e) {
      showError('Falha ao codificar o texto. Tente novamente');
    }
  };

  const handleDecode = () => {
    try {
      const decodedText = decodeCharacters({ text: decodeText });
      setEncodeText(decodedText);
      showSuccess('Texto decodificado com sucesso!');
    } catch (e) {
      showError('Falha ao decodificar o texto. Tente novamente');
    }
  };

  return (
    <section className={classes.container}>
      <button
        type="button"
        className="field button button-outline"
        onClick={handleEncode}
      >
        <i className="material-icons">chevron_right</i>
      </button>
      <input
        className="field field-outline"
        type="number"
        value={rotateNumber}
        onChange={({ target: { value } }) => handleRotateNumber(Number(value))}
        id="encode-selection"
        placeholder="Selecione o ordem"
        min="1"
      />
      <button
        type="button"
        className="field button button-outline"
        onClick={handleDecode}
      >
        <i className="material-icons">chevron_left</i>
      </button>
    </section>
  );
};
