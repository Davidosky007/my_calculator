/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import ButtonPannel from '../components/ButtonPanel';
import Button from '../components/Button';

describe('ButtonPanel component test', () => {
  test('render ButtonPanel component properly', () => {
    const buttonPanel = create(<ButtonPannel />).toJSON();
    expect(buttonPanel).toMatchSnapshot();
  });
  test('render Button component properly', () => {
    const button = create(<Button />).toJSON();
    expect(button).toMatchSnapshot();
  });
});
