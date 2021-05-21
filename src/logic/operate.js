/* eslint-disable no-return-assign */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  if (!numberOne || !numberTwo || !operator) return '0';

  let result = 0;
  switch (operator) {
    case '+':
      result = numberOne.plus(numberTwo);
      break;
    case 'x':
      result = numberOne.times(numberTwo);
      break;
    case '-':
      result = numberOne.minus(numberTwo);
      break;
    case '÷':
      result = numberTwo === '0' ? 'undefined' : Big(numberOne).div(numberTwo).toString();
      break;

    default:
      result = 0;
      break;
  }

  return result.toString();
};

export default operate;
