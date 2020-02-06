import React, { useState } from 'react';
import CharacterStatusSearch from './character/CharacterStatusSearch';
import Characters from './character/Characters';

const NewCharacterStatus = () => {
  console.log('newCharacterStatus', NewCharacterStatus)
  //STATUS STATE
  const [status, setStatus] = useState('');

  return (
    <>
      <CharacterStatusSearch setStatus={setStatus} />
      <Characters status={status} />
    </>
  );
};
export default NewCharacterStatus;
