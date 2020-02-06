import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Characters from './Characters';
import styles from './CharacterStatusSearch.css';
import RadioButtons from '../commons/RadioButtons';

const CharacterStatusSearch = ({ setStatus }) => {
  const radioButtons = [
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' }
  ];

  return (
    <section className={styles.radioButtonsContainer}>
      <RadioButtons
        radioButtons={radioButtons}
        name='characterStatus'
        onChange={({ target }) => setStatus(target.value)}
      />
    </section>
  );
};
CharacterStatusSearch.propTypes = {
  setStatus: PropTypes.func.isRequired
};
export default CharacterStatusSearch;
