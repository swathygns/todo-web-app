import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';

test('renders todo list item', () => {
  render(<TodoItem props={
    {
        name:"buy toothpaste",
        status:"active"
    }
  } />);
  const listItemName = screen.getByText(/buy toothpaste/i);
  const listItemStatus = screen.getByText(/active/i);

  expect(listItemName).toBeInTheDocument();
  expect(listItemStatus).toBeInTheDocument();

});
