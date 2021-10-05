import useStyle from './styles';

export const Textarea = ({ text, handleText }) => {
  const classes = useStyle();

  return (
    <section className={classes.container}>
      <textarea
        cols="30"
        rows="10"
        value={text}
        onChange={({ target: { value } }) => handleText(value)}
      />
    </section>
  );
};
