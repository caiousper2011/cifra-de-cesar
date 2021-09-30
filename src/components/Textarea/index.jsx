export const Textarea = ({ text, handleText }) => (
  <section className="text-container">
    <textarea
      cols="30"
      rows="10"
      value={text}
      onChange={({ target: { value } }) => handleText(value)}
    />
  </section>
);
