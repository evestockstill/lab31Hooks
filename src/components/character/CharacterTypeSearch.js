import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './CharacterTypeSearch.css';
import RadioButtons from '../components/commons/RadioButtons';

const CharacterTypeSearch = ({ selectType }) => {
  const [query, setQuery] = useState('');
  const [searchTypeTerm, setSearchTypeTerm] = useState('');

  const radioButtons = [
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' }
  ];

  const handleSubmit = event => {
    event.preventDefault();
    setSearchTypeTerm(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className={styles.radioButtonsContainer}>
          <RadioButtons
            radioButtons={radioButtons}
            name='characterType'
            onChange={({ target }) => setQuery(target.value)}
          />
          <button>Status</button>
        </section>
      </form>
      <Character searchTypeTerm={searchTypeTerm} selectType={selectType} />
    </>
  );
};
CharacterTypeSearch.propTypes = {
  selectType: PropTypes.fn.isRequired
};
export default CharacterTypeSearch;
