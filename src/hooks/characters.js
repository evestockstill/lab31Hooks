import { useState, useEffect } from 'react';
import { getCharacters, getCharactersByStatus } from '../services/rickMortyApi';

export const useCharacters = searchStatusTerm => {
  const [characters, setCharacters] = useState({
    image: '',
    name: '',
    status: ''
  });

  useEffect(() => {
    if(!searchStatusTerm) return;

    getCharacters(searchStatusTerm)
      .then(setCharacters);
  }, [searchStatusTerm]);

  return characters;
};
export const useGetCharactersByStatus = status => {
  const [characterStatus, setCharacterStatus] = useState({});
  useEffect(() => {
    getCharactersByStatus(status)
      .then(characterStatus => setCharacterStatus(characterStatus));
  }, [status]);
  return characterStatus;
};
