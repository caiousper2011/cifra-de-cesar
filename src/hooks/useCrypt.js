import { useContext } from 'react';
import { CryptContext } from '../context/CryptContext';

export const useCrypt = () => {
  const context = useContext(CryptContext);

  return context;
};
