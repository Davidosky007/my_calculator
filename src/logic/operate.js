import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  if (!numberOne || !numberTwo || !operator) return '0';

  let result = 0;
  const num1 = typeof numberOne !== 'number' ? Big(Number(numberOne)) : Big(numberOne);
  const num2 = typeof numberTwo !== 'number' ? Big(Number(numberTwo)) : Big(numberTwo);

  switch (operator) {
    case '+':
      result = num1.plus(num2);
      break;
    case 'x':
      result = num1.times(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case '÷':
      result = num1.div(num2).toFixed(1);
      break;

    default:
      result = 0;
      break;
  }
  return result.toString();
};

export default operate;
