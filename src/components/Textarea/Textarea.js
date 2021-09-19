const Textarea = ({ text, handleText }) => {
  return (
    <section className="text-container">
      <textarea
        id="txt-decode"
        cols="30"
        rows="10"
        value={text}
        onChange={({ target: { value } }) => handleText(value)}
      ></textarea>
    </section>
  );
};

export default Textarea;
