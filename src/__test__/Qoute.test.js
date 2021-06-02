/* eslint-disable linebreak-style */
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import Qoutes from '../components/Qoute';

describe('test for Qoutes component', () => {
  test('renders Qoutes component properly', () => {
    const qoute = create(<Qoutes />).toJSON();
    expect(qoute).toMatchSnapshot();
  });
});
