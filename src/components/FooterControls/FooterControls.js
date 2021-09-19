const FooterControls = () => {
  return (
    <section className="alphabet-container">
      <select className="field field-outline" type="text" id="alphabet-txt">
        <option value="">Selecione um alfabeto</option>
      </select>
      <label
        className="field button button-outline"
        htmlFor="input-import-file"
      >
        importar texto
      </label>
      <input type="file" id="input-import-file" accept=".txt" />
    </section>
  );
};

export default FooterControls;
