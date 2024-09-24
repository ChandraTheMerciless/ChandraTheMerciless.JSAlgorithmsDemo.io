import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlgorithmGroup from './AlgorithmGroup';

test('correctly renders loose comparison for truthy', async () => {
  render(<AlgorithmGroup algorithm="42 == '42'" />);
  const buttonElement = screen.getByTestId('calculateButton');
  await userEvent.click(buttonElement);
  const answer = screen.getByText(/true/i);
  expect(answer).toBeInTheDocument();
});
