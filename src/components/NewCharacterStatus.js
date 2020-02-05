import React, { useState } from 'react';
import CharacterStatusSearch from './character/CharacterStatusSearch';
import Character from './character/Character';

const NewCharacterStatus = () => {
  const [statusSearch, setStatusSearch] = useState('');

  return (
    <>
      <CharacterStatusSearch selectCharacterStatus={setStatusSearch} />
      <Character statusSearch={statusSearch} />
    </>
  );
};
export default NewCharacterStatus;
