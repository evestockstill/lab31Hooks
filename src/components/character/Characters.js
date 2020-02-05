import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { useCharacters } from '../../hooks/characters';

const Characters = ({ status }) => {
  const characters = useCharacters(status);
  console.log('characters in list component', characters);
  const characterStatusElements = characters.map(character => {
    <li key={character.name}>
      <Character {...character} />
    </li>;
  });
  return <ul>{characterStatusElements}</ul>;
};

export default Characters;
