import { useState, useEffect } from 'react';
import { getCharacters } from '../services/rickMortyApi';

export const useCharacters = searchStatusTerm => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if(!searchStatusTerm) return;

    getCharacters(searchStatusTerm)
      .then(setCharacters);
  }, [searchStatusTerm]);

  return characters;
};
