// Pagination.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

// Mock the onPageChange and onNumberClick functions
const mockOnPageChange = jest.fn();
const mockOnNumberClick = jest.fn();

test('renders Pagination component correctly', () => {
  // Render the Pagination component
  render(
    <Pagination
      currentPage={1}
      totalPages={5}
      onPageChange={mockOnPageChange}
      onNumberClick={mockOnNumberClick}
    />
  );

  // Add your assertions here, for example:
  expect(screen.getByText('Pre')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  // ... add more assertions as needed
});

test('handles page change correctly', () => {
  // Render the Pagination component
  render(
    <Pagination
      currentPage={3}
      totalPages={5}
      onPageChange={mockOnPageChange}
      onNumberClick={mockOnNumberClick}
    />
  );

  // Simulate a click on the "Pre" button
  const preButton = screen.getByText('Pre');
  fireEvent.click(preButton);

  // Verify that the onPageChange function was called with the correct argument
  expect(mockOnPageChange).toHaveBeenCalledWith(2);

  // Simulate a click on the "Next" button
  const nextButton = screen.getByText('Next');
  fireEvent.click(nextButton);

  // Verify that the onPageChange function was called with the correct argument
  expect(mockOnPageChange).toHaveBeenCalledWith(4);
});

// Add more test cases to cover other component behavior
