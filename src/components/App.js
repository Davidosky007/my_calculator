/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

const StyledApp = styled.section`
display: inline-block;
width: 700px;
float: right;

`;

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
      <h2 className="app_head">Let us do math!</h2>
      <StyledApp>
        <Display result={(state.next && state.next.toString()) || (state.total && state.total.toString()) || '0'} />
        {' '}
        <ButtonPanel handleClick={handleClick} />
      </StyledApp>
    </>
  );
};

export default App;
