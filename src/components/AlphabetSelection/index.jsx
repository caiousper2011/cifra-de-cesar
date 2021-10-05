import alphabets from '../../utils/alphabets';
import { useCrypt } from '../../hooks/useCrypt';
import useStyles from './styles';

const AlphabetSelection = () => {
  const classes = useStyles();
  const { setAlphabet } = useCrypt();

  const handleAlphabet = ({ target: { value } }) => {
    setAlphabet([...value]);
  };

  return (
    <select
      className={classes.select}
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
