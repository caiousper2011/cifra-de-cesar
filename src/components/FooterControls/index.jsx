import AlphabetSelection from '../AlphabetSelection';
import ImportTextFile from '../ImportTextFile';
import useStyles from './styles';

export const FooterControls = ({ setEncodeText, setDecodeText }) => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <AlphabetSelection />
      <ImportTextFile
        setEncodeText={setEncodeText}
        setDecodeText={setDecodeText}
      />
    </section>
  );
};
