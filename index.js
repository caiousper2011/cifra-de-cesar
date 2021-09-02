'use strict';
const BEGIN_ENCODE_NUMBER_AT = 1;
const encodeTextElement = document.querySelector('#txt-encode');
const decodeTxtElement = document.querySelector('#txt-decode');
const btnEncode = document.querySelector('#btn-encode');
const btnDecode = document.querySelector('#btn-decode');
const encodeNumberElement = document.querySelector('#encode-selection');
const importFileElement = document.querySelector('#input-import-file');
const alphabetSelectElement = document.querySelector('#alphabet-txt');
let alphabetCharacters = [];
let encodeNumberAt = 1;
const alphabets = [
  {
    label: 'Alfabeto latino - ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    replacers: { A: '[ÀÁÂÃÄÅàáâãäå]', E: '[ÈÉÊË]', C: '[Ç]' },
  },
  {
    label: 'Alfabeto grego - ΑΒΓΔΕΖΗΘΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
    value: 'ΑΒΓΔΕΖΗΘΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ',
  },
  {
    label: 'Alfabeto russo - АБВГДЕЁЖЗИЙІКЛМНОПРСТУФХЦЧШЩЪЫЬѢЭЮЯѲѴ',
    value: 'АБВГДЕЁЖЗИЙІКЛМНОПРСТУФХЦЧШЩЪЫЬѢЭЮЯѲѴ',
  },
];

const expressionsToReplaceAccentedWords = (replacers) => {
  return Object.entries(replacers).reduce((regs, [key, expression]) => {
    return { ...regs, [key]: new RegExp(expression, 'gi') };
  }, {});
};

const replaceAccentedWords = (text, replacers) => {
  if (!replacers) {
    return text;
  }

  const replacementExpressions = expressionsToReplaceAccentedWords(replacers);
  return Object.entries(replacementExpressions).reduce(
    (text, [commonWord, expression]) => {
      return text.replace(expression, commonWord);
    },
    text,
  );
};

const getNextWordBasedOnEncodeNumber = (alphabet, wordIndex, encodeNumber) => {
  const nextWord = wordIndex + encodeNumber;

  if (nextWord >= alphabet.length) {
    return alphabet[nextWord - alphabet.length];
  }

  return alphabet[nextWord];
};

const getPreviousWordBasedOnEncodeNumber = (
  alphabet,
  wordIndex,
  encodeNumber,
) => {
  const previousWord = wordIndex - encodeNumber;

  if (previousWord < 0) {
    return alphabet[previousWord + alphabet.length];
  }

  return alphabet[previousWord];
};

const getWordIndex = (alphabet, word) =>
  alphabet.findIndex((alphabetWord) => word === alphabetWord);

const encode = (alphabet) => (text, encodeNumber) => {
  return text.replace(/./gi, (word) => {
    const currentWordIndex = getWordIndex(alphabet, word);

    if (currentWordIndex !== -1) {
      return getNextWordBasedOnEncodeNumber(
        alphabet,
        currentWordIndex,
        encodeNumber,
      );
    }

    return word;
  });
};

const encodeCharacteres = () => {
  const text = encodeTextElement.value;
  const formattedText = prepareText(text, alphabetCharacters);
  const encodePrepared = encode(alphabetCharacters);
  const convertedText = encodePrepared(formattedText, encodeNumberAt);

  decodeTxtElement.value = convertedText;
};

const decode = (alphabet) => (text, encodeNumber) => {
  return text.replace(/./gi, (word) => {
    const currentWordIndex = getWordIndex(alphabet, word);

    if (currentWordIndex !== -1) {
      return getPreviousWordBasedOnEncodeNumber(
        alphabet,
        currentWordIndex,
        encodeNumber,
      );
    }

    return word;
  });
};

const decodeCharacteres = () => {
  const text = decodeTxtElement.value;
  const formattedText = prepareText(text, alphabetCharacters);
  const decodePrepared = decode(alphabetCharacters);
  const convertedText = decodePrepared(formattedText, encodeNumberAt);

  encodeTextElement.value = convertedText;
};

const prepareText = (text, selectedAlphabet) => {
  const { replacers } = alphabets.find(
    ({ value }) => value == selectedAlphabet.join(''),
  );
  const textFormattedToUpperCase = text.toUpperCase();

  return replaceAccentedWords(textFormattedToUpperCase, replacers);
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
  alphabets.forEach(({ value, label }, index) => {
    const option = document.createElement('option');

    if (!Boolean(index)) {
      option.selected = true;
      alphabetSelected({ target: { value } });
    }

    option.value = value;
    option.textContent = label;
    alphabetSelectElement.appendChild(option);
  });
};

const alphabetSelected = ({ target: { value } }) => {
  alphabetCharacters = value.split('');
  encodeNumberElement.setAttribute('max', alphabetCharacters.length);
};

const init = () => {
  importFileElement.addEventListener('change', importFileText);
  encodeNumberElement.setAttribute('value', BEGIN_ENCODE_NUMBER_AT);
  btnEncode.addEventListener('click', encodeCharacteres);
  btnDecode.addEventListener('click', decodeCharacteres);
  alphabetSelectElement.addEventListener('change', alphabetSelected);
  encodeNumberElement.addEventListener(
    'change',
    ({ target: { value } }) => (encodeNumberAt = Number(value)),
  );
  generateAlphabetListIntoAlphabetSelect();
};

init();
