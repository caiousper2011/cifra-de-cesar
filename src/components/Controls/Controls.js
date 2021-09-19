import { useCrypt } from "../../context/CryptContext.js";

export const Controls = () => {
  const { encode, rotateNumber, handleRotateNumber, decode } = useCrypt();

  return (
    <section className="controls-container">
      <button className="field button button-outline" onClick={encode}>
        <i className="material-icons">chevron_right</i>
      </button>
      <input
        className="field field-outline"
        type="number"
        value={rotateNumber}
        onChange={({ target: { value } }) => handleRotateNumber(value)}
        id="encode-selection"
        placeholder="Selecione o ordem"
        min="1"
      />
      <button className="field button button-outline" onClick={decode}>
        <i className="material-icons">chevron_left</i>
      </button>
    </section>
  );
};

export default Controls;
