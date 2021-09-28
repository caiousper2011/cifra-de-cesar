import { classes } from "./Textarea.styles.js";

const Textarea = ({ text, handleText }) => {
  return (
    <section className={classes.container}>
      <textarea
        className={classes.field}
        cols="30"
        rows="10"
        value={text}
        onChange={({ target: { value } }) => handleText(value)}
      ></textarea>
    </section>
  );
};

export default Textarea;
