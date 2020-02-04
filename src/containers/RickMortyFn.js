import React, { useEffect, useState } from 'react';

import { getCharacter } from '../services/getCharacter';
import Character from '../components/character/Character';
import Button from '../components/commons/button/Button';

const RickMortyFn = () => {
  const [character, setCharacter] = useState({ name: '', img: '' });

  const fetch = () => {
    const randomNum = Math.floor(Math.random() * 493) + 1;

    return getCharacter(randomNum).then(character =>
      setCharacter({ character })
    );
  };
};
