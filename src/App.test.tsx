import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODO APP', () => {
  render(<App />);
  const pTag = screen.getByText(/Welcome/i);
  expect(pTag).toBeInTheDocument();
});
