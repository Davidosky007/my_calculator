/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttons, handleClick, className }) => (
  <div>
    <button type="button" onClick={() => handleClick(buttons)} className={className}>
      { buttons }
      {' '}
    </button>
  </div>
);

Button.propTypes = {
  buttons: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  buttons: null,
  handleClick: null,
  className: 'btn button',
};

export default Button;
