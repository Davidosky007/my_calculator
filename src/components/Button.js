/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';

const Button = ({ buttons }) => (
  <div>
    <button type="button">
      { buttons }
      {' '}
    </button>
  </div>
);

Button.propTypes = { buttons: propTypes.string.isRequired };

export default Button;
