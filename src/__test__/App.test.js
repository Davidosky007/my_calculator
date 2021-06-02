/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from '../components/App';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

describe('App component test', () => {
  test('render App component correctly ', () => {
    const proof = create(<App />).toJSON();
    expect(proof).toMatchSnapshot();
  });
  test('displays heading', () => {
    render(<App />);
    const h2 = screen.getByText('Let us do math!');
    expect(h2).toBeInTheDocument();
  });
  test('render Display component correctly', () => {
    const display = create(<Display />).toJSON();
    expect(display).toMatchSnapshot();
  });
  test('render ButtonPannel component correctly', () => {
    const buttonPanel = create(<ButtonPanel />).toJSON();
    expect(buttonPanel).toMatchSnapshot();
  });
});
