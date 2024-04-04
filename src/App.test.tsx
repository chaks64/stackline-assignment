import React from 'react';
import { render } from '@testing-library/react';
import Header from './Components/Header';

test('renders learn react link', () => {
  render(<Header />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
