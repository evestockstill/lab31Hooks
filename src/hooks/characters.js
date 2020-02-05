import { useState, useEffect } from 'react';
import { getCharacters, getCharactersByStatus } from '../services/rickMortyApi';

export const useCharacters = status => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if(!status) {
      console.log('in if');
      getCharacters().then(setCharacters);
    } else {
      console.log('in else', status);
      getCharactersByStatus(status).then(setCharacters);
    }
  }, [status]);


  return characters;
};

export const useGetCharactersByStatus = status => {
  const [characterStatus, setCharacterStatus] = useState({});
  useEffect(() => {
    getCharactersByStatus(status).then(characterStatus =>
      setCharacterStatus(characterStatus)
    );
  }, [status]);
  return characterStatus;
};
