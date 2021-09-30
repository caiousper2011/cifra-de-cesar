const expressionsToReplaceAccentedWords = (replacers) =>
  Object.entries(replacers).reduce(
    (regs, [key, expression]) => ({
      ...regs,
      [key]: new RegExp(expression, 'gi'),
    }),
    {}
  );

export const replaceAccentedWords = (text, replacers) => {
  if (!replacers) {
    return text;
  }

  const replacementExpressions = expressionsToReplaceAccentedWords(replacers);
  return Object.entries(replacementExpressions).reduce(
    (currentText, [commonWord, expression]) =>
      currentText.replace(expression, commonWord),
    text
  );
};

const getNextWordBasedOnEncodeNumber = (alphabet, wordIndex, encodeNumber) =>
  alphabet[(wordIndex + encodeNumber) % alphabet.length];

const getPreviousWordBasedOnEncodeNumber = (
  alphabet,
  wordIndex,
  encodeNumber
) => alphabet[(wordIndex - encodeNumber + alphabet.length) % alphabet.length];

const getWordIndex = (alphabet, word) =>
  alphabet.findIndex((alphabetWord) => word === alphabetWord);

export const encode = (text, encodeNumber, alphabet) => {
  if (typeof alphabet !== 'object' || !text) {
    throw new TypeError('wrong argument');
  }

  return text.replace(/./gi, (word) => {
    const currentWordIndex = getWordIndex(alphabet, word);

    if (currentWordIndex !== -1) {
      return getNextWordBasedOnEncodeNumber(
        alphabet,
        currentWordIndex,
        encodeNumber
      );
    }

    return word;
  });
};

export const decode = (text, encodeNumber, alphabet) =>
  text.replace(/./gi, (word) => {
    const currentWordIndex = getWordIndex(alphabet, word);

    if (currentWordIndex !== -1) {
      return getPreviousWordBasedOnEncodeNumber(
        alphabet,
        currentWordIndex,
        encodeNumber
      );
    }

    return word;
  });

export const prepareText = (text, selectedAlphabet, alphabets) => {
  if (!text) {
    throw new Error('No text to prepare');
  }

  const { replacers } = alphabets.find(
    ({ value }) => value === selectedAlphabet.join('')
  );
  const textFormattedToUpperCase = text.toUpperCase();

  return replaceAccentedWords(textFormattedToUpperCase, replacers);
};
