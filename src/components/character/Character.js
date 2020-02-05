import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';


const Character = ({ name, image }) => (
  <section className={styles.container}>
    <figure>
      <img src={image} />
      <figcaption className={styles.name}>{name}</figcaption>
    </figure>
  </section>

);

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Character;
