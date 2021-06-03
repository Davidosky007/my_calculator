/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import Display from '../components/Display';

describe('test Display component', () => {
  test('render Display component properly', () => {
    const display = create(<Display />).toJSON();
    expect(display).toMatchSnapshot();
  });
  test('it renders Display component with the text 0', () => {
    render(<Display />);
    expect(screen.getByText(0)).toBeInTheDocument();
  });
});
