import React, { Component } from 'react';
import styles from './Header.css';
// eslint-disable-next-line no-unused-vars
import normalize from 'normalize.css';
import logo from '../../assets/rick.jpeg';
export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <img src={logo} alt='simpsons logo' />
        <h1>Rick & Morty</h1>
      </header>
    );
  }
}
