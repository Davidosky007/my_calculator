/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../components/Home';

describe('test for Home component', () => {
  test('renders Home component properly', () => {
    const home = create(<Home/>).toJSON();
    expect(home).toMatchSnapshot();
  });
  test('it renders Home component with text welcome to our page', () => {
    render(<Home/>);
    expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
  });
  
});
