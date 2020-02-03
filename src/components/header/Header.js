import React, { Component } from 'react';
import styles from './Header.css';
// eslint-disable-next-line no-unused-vars
import normalize from 'normalize.css';
import logo from '../../assets/simpson.jpeg';
export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <img src={logo} alt='simpsons logo' />
        <h1>Simpson Quotes</h1>
      </header>
    );
  }
}
