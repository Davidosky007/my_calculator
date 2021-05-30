/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

const buttonGroups = {
  1: ['AC', '+/-', '%', '÷'],
  2: ['7', '8', '9', 'x'],
  3: ['4', '5', '6', '-'],
  4: ['1', '2', '3', '+'],
  5: ['0', '.', '='],
};

const ButtonPanel = ({ handleClick }) => (
  <div className="btns">
    <div className="btn_grp">
      {buttonGroups[1].map((btn) => (
        <Button
          name={btn}
          handleClick={handleClick}
          key={btn}
        />
      ))}
    </div>
    <div className="btn_grp">
      {buttonGroups[2].map((btn) => (
        <Button
          name={btn}
          handleClick={handleClick}
          key={btn}
        />
      ))}
    </div>
    <div className="btn_grp">
      {buttonGroups[3].map((btn) => (
        <Button
          name={btn}
          handleClick={handleClick}
          key={btn}
        />
      ))}
    </div>
    <div className="btn_grp">
      {buttonGroups[4].map((btn) => (
        <Button
          name={btn}
          handleClick={handleClick}
          key={btn}
        />
      ))}
    </div>
    <div className="btn_grp2">
      {buttonGroups[5].map((btn) => (
        <Button
          name={btn}
          handleClick={handleClick}
          key={btn}
        />
      ))}
    </div>

  </div>
);
ButtonPanel.protoTypes = {
  handleClick: propTypes.func,
};

ButtonPanel.defaultProps = {
  handleClick: null,
};

export default ButtonPanel;
