/* eslint-disable linebreak-style */
import React from 'react';
import propTypes from 'prop-types';

const Display = ({ result }) => (
  <div>
    <h2>
      This is my calculation result:
      {result}
    </h2>
  </div>
);

Display.propTypes = { result: propTypes.string.isRequired };

export default Display;
