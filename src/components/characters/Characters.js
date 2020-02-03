import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <figure>
    <img src={image} />
    <figcaption>
      {name}
    </figcaption>
  </figure>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Character;
