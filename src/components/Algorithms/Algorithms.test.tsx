import React from 'react';
import { render, screen } from '@testing-library/react';
import Algorithms from './Algorithms';

test('renders learn react link', () => {
  render(<Algorithms />);
  const pageTitle = screen.getByText(/Give these a try!/i);
  expect(pageTitle).toBeInTheDocument();
});
