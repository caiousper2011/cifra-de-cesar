const Textarea = ({ text, handleText }) => {
  return (
    <section className="text-container">
      <textarea
        cols="30"
        rows="10"
        value={text}
        onChange={({ target: { value } }) => handleText(value)}
      ></textarea>
    </section>
  );
};

export default Textarea;
