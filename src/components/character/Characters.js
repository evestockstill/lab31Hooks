import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import {
  useCharacters
} from '../../hooks/characters';

const Characters = ({ searchStatusTerm }) => {
  const characters = useCharacters(searchStatusTerm);

  const characterStatusElements = characters.map(character => {
    <li
      key={character.name}

    >
      <Character {...character} />
    </li>;
  });
  return <ul>{characterStatusElements}</ul>;
};
Characters.propTypes = {
  searchStatusTerm: PropTypes.func.isRequired,
};
export default Characters;
