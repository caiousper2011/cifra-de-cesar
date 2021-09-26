"use strict";
import cipher from "./cipher.js";

const BEGIN_ENCODE_NUMBER_AT = 1;
const encodeTextElement = document.querySelector("#txt-encode");
const decodeTxtElement = document.querySelector("#txt-decode");
const btnEncode = document.querySelector("#btn-encode");
const btnDecode = document.querySelector("#btn-decode");
const encodeNumberElement = document.querySelector("#encode-selection");
const importFileElement = document.querySelector("#input-import-file");
const alphabetSelectElement = document.querySelector("#alphabet-txt");
let alphabetCharacters = [];
let encodeNumberAt = 1;

const alphabetSelected = ({ target: { value } }) => {
  alphabetCharacters = [...value];
  encodeNumberElement.setAttribute("max", alphabetCharacters.length);
};

const encodeCharacteres = () => {
  const text = encodeTextElement.value;
  const formattedText = cipher.prepareText(text, alphabetCharacters);
  const encodePrepared = cipher.encode(alphabetCharacters);
  const convertedText = encodePrepared(formattedText, encodeNumberAt);

  decodeTxtElement.value = convertedText;
};

const decodeCharacteres = () => {
  const text = decodeTxtElement.value;
  const formattedText = cipher.prepareText(text, alphabetCharacters);
  const decodePrepared = cipher.decode(alphabetCharacters);
  const convertedText = decodePrepared(formattedText, encodeNumberAt);

  encodeTextElement.value = convertedText;
};

const importFileText = async ({
  target: {
    files: [file],
  },
}) => {
  const text = await file.text();
  encodeTextElement.value = text;
};

const generateAlphabetListIntoAlphabetSelect = () => {
  cipher.alphabets.forEach(({ value, label }, index) => {
    const option = document.createElement("option");

    if (!index) {
      option.selected = true;
      alphabetSelected({ target: { value } });
    }

    option.value = value;
    option.textContent = label;
    alphabetSelectElement.appendChild(option);
  });
};

const init = () => {
  importFileElement.addEventListener("change", importFileText);
  encodeNumberElement.setAttribute("value", BEGIN_ENCODE_NUMBER_AT);
  btnEncode.addEventListener("click", encodeCharacteres);
  btnDecode.addEventListener("click", decodeCharacteres);
  alphabetSelectElement.addEventListener("change", alphabetSelected);
  encodeNumberElement.addEventListener(
    "change",
    ({ target: { value } }) => (encodeNumberAt = Number(value))
  );
  generateAlphabetListIntoAlphabetSelect();
};

init();
