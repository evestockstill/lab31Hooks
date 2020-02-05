import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({ text, handleClick }) => <button className={styles.btn}onClick={handleClick}>{text}</button>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
export default Button;
