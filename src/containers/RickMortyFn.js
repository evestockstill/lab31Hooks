import React, { useEffect, useState } from 'react';
import { getCharacter } from '../services/getCharacter';
import Character from '../components/character/Character';
import Button from '../components/commons/button/Button';


const RickMortyFn = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  
  useEffect(() => {
    fetch();
  }, []);
  const handleClick = () => {
    fetch();
  };

  const fetch = () => {
    const randomNum = Math.floor(Math.random() * 493) + 1;

    return getCharacter(randomNum).then(character => {
      setName(character.name);
      setImage(character.image);
    });
  };
  return (
    <>
      <Character image={image} name={name} />
      <Button 
        text="Who's next?"
        handleClick={handleClick}
      />
    </>
  );
};
export default RickMortyFn;
