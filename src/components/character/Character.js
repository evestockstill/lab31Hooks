import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';


const Character = ({ name, image, type }) => (
  <section className={styles.container}>
    <figure>
      <img src={image} />
      <figcaption className={styles.name}>{name}status:{type}</figcaption>
    </figure>
  </section>

);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Character;
