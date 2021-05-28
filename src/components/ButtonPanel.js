/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const buttonGroups = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = ({ handleClick }) => (
  <div className="btn-panel">
    {buttonGroups.map((group, index) => (
      <div key={`group-${(index + 1)}`}>
        {group.map((button) => <Button name={button} handleClick={handleClick} key={button} />)}
      </div>
    ))}
  </div>
);

ButtonPanel.protoTypes = {
  handleClick: propTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
