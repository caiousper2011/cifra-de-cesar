import { createContext, useState } from 'react';
import { encode, decode, prepareText } from '../utils/cipher';
import alphabets from '../utils/alphabets';
import ALPHABET_ENUM from '../enum/alphabet';

export const CryptContext = createContext({
  rotateNumber: 1,
});

export const CryptProvider = ({ children }) => {
  const [rotateNumber, setRotateNumber] = useState(1);
  const [alphabet, setAlphabet] = useState([
    ...alphabets[ALPHABET_ENUM.PORTUGUESE].value,
  ]);

  const encodeCharacters = ({ text }) => {
    const preparedText = prepareText(text, alphabet, alphabets);

    return encode(preparedText, rotateNumber, alphabet, alphabets);
  };

  const decodeCharacters = ({ text }) => {
    const preparedText = prepareText(text, alphabet, alphabets);

    return decode(preparedText, rotateNumber, alphabet, alphabets);
  };

  return (
    <CryptContext.Provider
      value={{
        encodeCharacters,
        decodeCharacters,
        rotateNumber,
        handleRotateNumber: setRotateNumber,
        setAlphabet,
      }}
    >
      {children}
    </CryptContext.Provider>
  );
};
