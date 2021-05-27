/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newState = Calculate(state, buttonName);
    setState(() => ({ ...newState }));
  };
  return (
    <>
      <Display result={(state.next && state.next.toString()) || (state.total && state.total.toString()) || '0'} />
      {' '}
      <ButtonPanel handleClick={handleClick} />
    </>
  );
};

export default App;
