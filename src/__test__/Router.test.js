/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import AppRoute from '../components/Router';

describe('test for AppRouter component', () => {
  test('it renders Home component with text Math Magician', () => {
    render(<AppRoute/>);
    expect(screen.getByText('Math Magician')).toBeInTheDocument();
  }); test('renders AppRouter component properly', () => {
    const home = create(<AppRoute/>).toJSON();
    expect(home).toMatchSnapshot();
  });
});
