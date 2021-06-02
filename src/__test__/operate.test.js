/* eslint-disable linebreak-style */
import Operate from '../logic/operate';

describe('test for operate logic', () => {
  test('returns result for operation x', () => {
    expect(Operate('2', '4', 'x')).toBe('8');
  });
  test('returns result for operation -', () => {
    expect(Operate('8', '4', '-')).toBe('4');
  });
  test('returns result for operation +', () => {
    expect(Operate('8', '4', '+')).toBe('12');
  });
  test('returns result for operation ÷', () => {
    expect(Operate('8', '4', '÷')).toBe('2');
  });
});
