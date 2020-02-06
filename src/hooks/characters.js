import { useState, useEffect } from 'react';
import { getCharacters, getCharactersByStatus } from '../services/rickMortyApi';

export const useCharacters = () => {

  const [characters, setCharacters] = useState({
    image: '',
    name: '',
    status: ''
  });
  
  const [val, setVal] = useState('');

  useEffect(() => {
    handleCharacterChange();
  }, []);
    
  const handleCharacterChange = () => {
    getCharactersByStatus(val)
      .then(setCharacters(characters));
  };
  const handleValChange = (val) => {
    setVal(val);
    
  };
  return { characters, handleValChange, handleCharacterChange, val };
};


 
