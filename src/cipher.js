const alphabets = [
  {
    label: "Alfabeto latino - ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    replacers: { A: "[ÀÁÂÃÄÅàáâãäå]", E: "[ÈÉÊË]", C: "[Ç]" },
  },
  {
    label: "Alfabeto grego - ΑΒΓΔΕΖΗΘΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
    value: "ΑΒΓΔΕΖΗΘΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
  },
  {
    label: "Alfabeto russo - АБВГДЕЁЖЗИЙІКЛМНОПРСТУФХЦЧШЩЪЫЬѢЭЮЯѲѴ",
    value: "АБВГДЕЁЖЗИЙІКЛМНОПРСТУФХЦЧШЩЪЫЬѢЭЮЯѲѴ",
  },
];

const expressionsToReplaceAccentedWords = (replacers) => {
  return Object.entries(replacers).reduce((regs, [key, expression]) => {
    return { ...regs, [key]: new RegExp(expression, "gi") };
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

const encode = (alphabet) => (text, encodeNumber) => {
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

const decode = (alphabet) => (text, encodeNumber) => {
  return text.replace(/./gi, (word) => {
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
};

const cipher = {
  encode,
  decode,
  alphabets,
  replaceAccentedWords,
};

export default cipher;
