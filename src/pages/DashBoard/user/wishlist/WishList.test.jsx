import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wishlist from './WishList';

// Mock the Swal.fire function
jest.mock('sweetalert2', () => {
  return {
    fire: jest.fn(() => Promise.resolve({ isConfirmed: true })), // Mocking a confirmation
  };
});

// Mock the WishCard component
jest.mock('./WishCard', () => {
  return () => <div data-testid="wish-card-mock" />;
});

describe('Wishlist Component', () => {
  it('renders the component', async () => {
    render(<Wishlist />);
    
    // Wait for the component to render
    await waitFor(() => screen.getByTestId('wish-card-mock'));

    // Assert that the component rendered successfully
    expect(screen.getByText('My wishlist')).toBeInTheDocument();
    expect(screen.getAllByTestId('wish-card-mock')).toHaveLength(2); // Mocked data
  });

  it('handles removal from wishlist', async () => {
    render(<Wishlist />);
    
    // Wait for the component to render
    await waitFor(() => screen.getByTestId('wish-card-mock'));

    // Click on the "Remove" button in the WishCard component
    userEvent.click(screen.getByText('Remove'));

    // Wait for the confirmation dialog to be displayed
    await waitFor(() => screen.getByText('The movie has been removed from your wishlist!'));

    // Assert that the movie has been removed from the wishlist
    expect(screen.queryByTestId('wish-card-mock')).not.toBeInTheDocument();
  });
});
