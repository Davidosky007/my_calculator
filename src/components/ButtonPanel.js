/* eslint-disable linebreak-style */
import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Button buttons="AC" />
      <Button buttons="+/-" />
      <Button buttons="%" />
      <Button buttons="÷" />
    </div>
    <div>
      <Button buttons="7" />
      <Button buttons="8" />
      <Button buttons="9" />
      <Button buttons="X" />
    </div>
    <div>
      <Button buttons="4" />
      <Button buttons="5" />
      <Button buttons="6" />
      <Button buttons="-" />
    </div>
    <div>
      <Button buttons="1" />
      <Button buttons="2" />
      <Button buttons="3" />
      <Button buttons="+" />
    </div>
    <div>
      <Button buttons="0" />
      <Button buttons="." />
      <Button buttons="=" />
    </div>
  </>
);

export default ButtonPanel;
