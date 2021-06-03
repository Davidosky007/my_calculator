/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, handleClick, className,
}) => (
  <button type="button" onClick={() => handleClick(name)} className={className}>
    { name }
    {' '}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: null,
  handleClick: null,
  className: 'btn button',
};

export default Button;
