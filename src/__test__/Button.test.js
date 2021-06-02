/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button component test', () => {
  test('render Button component correctly', () => {
    const button = create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
