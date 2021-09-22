import alphabets from "../../utils/alphabets.js";
import { useCrypt } from "../../hooks/useCrypt";

const AlphabetSelection = () => {
  const { setAlphabet } = useCrypt();

  const handleAlphabet = ({ target: { value } }) => {
    setAlphabet([...value]);
  };

  return (
    <select
      className="field field-outline"
      type="text"
      id="alphabet-txt"
      onChange={handleAlphabet}
    >
      {alphabets.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default AlphabetSelection;
