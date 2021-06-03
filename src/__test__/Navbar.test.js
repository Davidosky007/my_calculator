/* eslint-disable linebreak-style */
import { fireEvent, render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('test for Navbar components', () => {
  test('should navigate to home link', () => {
    const { getByText } = render(<a href="/">Home</a>);
    const link = getByText('Home');
    fireEvent.click(link);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
  });
  test('should navigate to calculate link', () => {
    const { getByText } = render(<a href="/calculator">Calculator</a>);
    const link = getByText('Calculator');
    fireEvent.click(link);
    expect(screen.getByText('Calculator').closest('a')).toHaveAttribute('href', '/calculator');
  });
  test('should navigate to calculate link', () => {
    const { getByText } = render(<a href="/qoutes">Qoutes</a>);
    const link = getByText('Qoutes');
    fireEvent.click(link);
    expect(screen.getByText('Qoutes').closest('a')).toHaveAttribute('href', '/qoutes');
  });
  test('Navbar component should render properly', () => {
    const navbar = create(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    ).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
