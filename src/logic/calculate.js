/* eslint-disable no-unused-expressions */
import operate from './operate';

const calculate = (data, buttonName) => {
  const newData = { ...data };
  let { total, next, operation } = newData;

  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = null;
      break;
    case '+/-':
      next ? next = (next * -1).toString() : total = (total * -1).toString();
      break;
    case '÷':
    case '-':
    case '+':
    case 'x':
      !next ? operation = buttonName : operation = null;
      break;
    case '%':
      next ? next = (next / 100).toString() : total = (total / 100).toString();
      break;
    case '=':
      total = operate(total, next, operation);
      next = '';
      operation = null;
      break;
    default:
      operation ? next += buttonName : total += buttonName;
  }
  return { total, next, operation };
};

export default calculate;
