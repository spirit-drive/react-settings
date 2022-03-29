import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('renders learn react link', () => {
  render(<Button>Button</Button>);
  const linkElement = screen.getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});
