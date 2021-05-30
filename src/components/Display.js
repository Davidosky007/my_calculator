/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDisplay = styled.h2`
display: flex;
color: white;
font-weight: bold;
float: right;
`;

const StyledDisCompo = styled.section`
background-color: gray;
height: 100px;
padding: 15px;
width: 400px;
margin: 0 auto;
border-radius: 30px;
`;

const Display = (props) => {
  const { result } = props;
  return (
    <StyledDisCompo>
      <StyledDisplay>
        {result}
      </StyledDisplay>
    </StyledDisCompo>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
