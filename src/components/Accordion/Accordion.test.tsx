import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

test('renders learn react link', () => {
  render(
    <Accordion title={''}>
      <div></div>
    </Accordion>
  );
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();
});
