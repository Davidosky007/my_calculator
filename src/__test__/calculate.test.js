/* eslint-disable linebreak-style */
import Calculate from '../logic/calculate';

describe('test calculator logic', () => {
  test('should be a function', () => {
    expect(typeof Calculate).toEqual('function');
  });
  test('resets when operation is AC', () => {
    expect(Calculate({ total: 1, next: 1, operation: '-' }, 'AC')).toEqual({ next: '', operation: null, total: '' });
  });
  test('to change from positive to negative when "+/- " is clicked', () => {
    expect(Calculate({ total: 20, next: '', operation: null }, '+/-').total).toEqual('-20');
  });
  test('set the operator to -', () => {
    expect(Calculate({ total: '', next: '', operation: '' }, '-').operation).toEqual('-');
  });

  test('set the operator to +', () => {
    expect(Calculate({ total: '', next: '', operation: '' }, '+').operation).toEqual('+');
  });
  test('set the operator to x', () => {
    expect(Calculate({ total: '', next: '', operation: '' }, 'x').operation).toEqual('x');
  });

  test('set the operator to +', () => {
    expect(Calculate({ total: '', next: '', operation: '' }, '+').operation).toEqual('+');
  });

  test('returns the percentage when "%" is clicked ', () => {
    expect(Calculate({ total: '', next: '100', operation: '' }, '%').next).toEqual('1');
  });

  test('returns the result when "=" is clicked ', () => {
    expect(Calculate({ total: '50', next: '100', operation: '+' }, '=').total).toEqual('150');
  });

  test('set the next value if a number is provided the second time ', () => {
    expect(Calculate({ total: '50', next: '', operation: '+' }, '50').next).toEqual('50');
  });
});
