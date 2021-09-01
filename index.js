'use strict';
const BEGIN_ENCODE_NUMBER_AT = 1;
const alphabetCharacters = [...Array(26)]
  .map((_, i) => i + 65)
  .map((number) => String.fromCharCode(number));

const encodeTextElement = document.querySelector('#txt-encode');
const decodeTxtElement = document.querySelector('#txt-decode');
const btnEncode = document.querySelector('#btn-encode');
const btnDecode = document.querySelector('#btn-decode');
const encodeNumberElement = document.querySelector('#encode-selection');
const importFileElement = document.querySelector('#input-import-file');
let encodeNumberAt = 1;

const expressionsToReplaceAccentedWords = () => {
  const charactersToBeReplaced = { A: '[ÀÁÂÃÄÅàáâãäå]', E: '[ÈÉÊË]', C: '[Ç]' };
  return Object.entries(charactersToBeReplaced).reduce(
    (regs, [key, expression]) => {
      return { ...regs, [key]: new RegExp(expression, 'gi') };
    },
    {},
  );
};

const replaceAccentedWords = (text) => {
  const replacementExpressions = expressionsToReplaceAccentedWords();
  return Object.entries(replacementExpressions).reduce(
    (text, [commonWord, expression]) => {
      return text.replace(expression, commonWord);
    },
    text,
  );
};

const getNextWordBasedOnEncodeNumber = (wordIndex, encodeNumber) => {
  const nextWord = wordIndex + encodeNumber;

  if (nextWord >= alphabetCharacters.length) {
    return alphabetCharacters[nextWord - alphabetCharacters.length];
  }

  return alphabetCharacters[nextWord];
};

const getPreviousWordBasedOnEncodeNumber = (wordIndex, encodeNumber) => {
  const previousWord = wordIndex - encodeNumber;

  if (previousWord < 0) {
    return alphabetCharacters[previousWord + alphabetCharacters.length];
  }

  return alphabetCharacters[previousWord];
};

const getWordIndex = (word) =>
  alphabetCharacters.findIndex((alphabetWord) => word === alphabetWord);

const encode = (text, encodeNumber) => {
  return text.replace(/./gi, (word) => {
    const currentWordIndex = getWordIndex(word);

    if (currentWordIndex !== -1) {
      return getNextWordBasedOnEncodeNumber(currentWordIndex, encodeNumber);
    }

    return word;
  });
};

const encodeCharacteres = () => {
  const text = encodeTextElement.value;
  const formattedText = prepareText(text);
  const convertedText = encode(formattedText, encodeNumberAt);

  decodeTxtElement.value = convertedText;
};

const decode = (text, encodeNumber) => {
  return text.replace(/./gi, (word) => {
    const currentWordIndex = getWordIndex(word);

    if (currentWordIndex !== -1) {
      return getPreviousWordBasedOnEncodeNumber(currentWordIndex, encodeNumber);
    }

    return word;
  });
};

const decodeCharacteres = () => {
  const text = decodeTxtElement.value;
  const formattedText = prepareText(text);
  const convertedText = decode(formattedText, encodeNumberAt);

  encodeTextElement.value = convertedText;
};

const prepareText = (text) => {
  const textFormattedToUpperCase = text.toUpperCase();
  return replaceAccentedWords(textFormattedToUpperCase);
};

const importFileText = async ({
  target: {
    files: [file],
  },
}) => {
  const text = await file.text();
  encodeTextElement.value = text;
};

const init = () => {
  importFileElement.addEventListener('change', importFileText);
  encodeNumberElement.setAttribute('max', alphabetCharacters.length);
  encodeNumberElement.setAttribute('value', BEGIN_ENCODE_NUMBER_AT);
  btnEncode.addEventListener('click', encodeCharacteres);
  btnDecode.addEventListener('click', decodeCharacteres);
  encodeNumberElement.addEventListener(
    'change',
    ({ target: { value } }) => (encodeNumberAt = Number(value)),
  );
};

init();
