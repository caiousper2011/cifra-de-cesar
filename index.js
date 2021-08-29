'use strict';
const BEGIN_ENCODE_NUMBER_AT = 1;
const alphabetCharacters = [...Array(26)]
  .map((_, i) => i + 65)
  .map((number) => String.fromCharCode(number));

const encodeTextElement = document.querySelector('#txt-encode');
const decodeTxtElement = document.querySelector('#txt-decode');
const btnEncode = document.querySelector('#btn-encode');
const encodeNumberElement = document.querySelector('#encode-selection');
let encodeNumberAt = 1;

encodeTextElement.value = 'ab cd ef gh';
decodeTxtElement.value = 'hi jk lm';

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

const prepareText = (text) => {
  const textFormattedToUpperCase = text.toUpperCase();
  return replaceAccentedWords(textFormattedToUpperCase);
};

const init = () => {
  encodeNumberElement.setAttribute('max', alphabetCharacters.length);
  encodeNumberElement.setAttribute('value', BEGIN_ENCODE_NUMBER_AT);
  btnEncode.addEventListener('click', encodeCharacteres);
  encodeNumberElement.addEventListener(
    'change',
    ({ target: { value } }) => (encodeNumberAt = Number(value)),
  );
};

init();
