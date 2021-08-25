'use strict';
const alphabetCharacters = [...Array(26)]
  .map((_, i) => i + 65)
  .map((number) => String.fromCharCode(number));

const textToBeConvertedElement = document.querySelector('#to-be-converted');
const convertedTextElement = document.querySelector('#converted-text');
const btnConvert = document.querySelector('#btn-convert');
const encodeNumber = 8;
//TODO: remove below before comment
textToBeConvertedElement.value = 'abcd efgh ijklm\nsdf sdfsd fsdf\nsds dfsdf';
btnConvert.addEventListener('click', () => {
  const textToBeConverted = textToBeConvertedElement.value;
  const textWithNoAccentedWords = replaceAccentedWords(textToBeConverted);
  const convertedText = convert(textWithNoAccentedWords).join('');
  convertedTextElement.value = convertedText;
  console.log(convertedText);
});

const getWordIndex = (word) =>
  alphabetCharacters.findIndex((alphabetWord) => word === alphabetWord);

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

const getNextWordBasedOnEncodeNumber = (wordIndex) => {
  const nextWord = wordIndex + encodeNumber;

  return nextWord >= alphabetCharacters.length
    ? alphabetCharacters[nextWord - alphabetCharacters.length]
    : alphabetCharacters[nextWord];
};

const convert = (text) => {
  const splitedText = text.split('');

  return splitedText
    .map((word) => word.toUpperCase())
    .map((currentWorld) => {
      const currentWordIndex = getWordIndex(currentWorld);

      return currentWordIndex !== -1
        ? getNextWordBasedOnEncodeNumber(currentWordIndex)
        : currentWorld;
    });
};
