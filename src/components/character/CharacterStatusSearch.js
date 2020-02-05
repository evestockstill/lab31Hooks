import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Characters from './Characters';
import styles from './CharacterStatusSearch.css';
// import RadioButtons from '../components/commons/RadioButtons';

const CharacterStatusSearch = ({ selectCharacterStatus }) => {
  const [query, setQuery] = useState('');
  const [searchStatusTerm, setSearchStatusTerm] = useState('');

  const radioButtons = [
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Unknown', value: 'unknown' }
  ];

  const handleSubmit = event => {
    event.preventDefault();
    setSearchStatusTerm(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className={styles.radioButtonsContainer}>
          {/* <RadioButtons
            radioButtons={radioButtons}
            name='characterStatus'
            onChange={({ target }) => setQuery(target.value)}
          /> */}
          <button>Status</button>
        </section>
      </form>
      <Characters searchStatusTerm={searchStatusTerm} selectStatus={selectCharacterStatus} />
    </>
  );
};
// CharacterStatusSearch.propTypes = {
//   selectStatus: PropTypes.fn.isRequired
// };
export default CharacterStatusSearch;
