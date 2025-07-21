import React from 'react';
import { render, screen } from '@testing-library/react';
import NotImplementedPage from '../src/pages/NotImplementedPage';

describe('NotImplementedPage', () => {
  it('renders the correct heading and back button', () => {
    render(<NotImplementedPage page="Features" />);
    expect(screen.getByText(/features page not implemented yet/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument();
  });
}); 