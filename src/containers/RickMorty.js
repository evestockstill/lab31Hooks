import React, { Component } from 'react';
import { getCharacter } from '../services/getCharacter';
import Character from '../components/character/Character';
import Button from '../components/commons/button/Button';
import styles from '../components/commons/button/Button.css';

export default class RickMorty extends Component {
  state = {
    name: '',
    image: ''
  };

  componentDidMount() {
    this.fetch();
  }

  handleClick = () => {
    this.fetch();
  };

  fetch = () => {
    const randomNum = Math.floor(Math.random() * 493) + 1;

    return getCharacter(randomNum).then(character =>
      this.setState({
        name: character.name,
        image: character.image
      })
    );
  };

  render() {
    const { name, image } = this.state;

    return (
      <>
        <Character image={image} name={name} />
        <Button className={styles.nextBtn}text="Who's next?" handleClick={this.handleClick} />
      </>
    );
  }
}
