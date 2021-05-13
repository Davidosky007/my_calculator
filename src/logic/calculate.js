/* eslint-disable no-unused-expressions */
import operate from './operate';

const calculate = (data, btnName) => {
  const newData = { ...data };
  let { total, next, operation } = newData;

  switch (btnName) {
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
    case '×':
      operation = !next ? btnName : null;
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
      operation ? next += btnName : total += btnName;
  }
  return (total, next, operation);
};

export default calculate;
