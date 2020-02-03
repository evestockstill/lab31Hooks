import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, name, image }) => (
  <figure>
    <img src={image} />
    <figcaption>
      &quot;{text}&quot;{name}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string
};

export default Quote;
