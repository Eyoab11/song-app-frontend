import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddSongModal from '../src/components/AddSongModal';

describe('AddSongModal', () => {
  it('renders and submits the form', () => {
    const handleSubmit = jest.fn();
    render(
      <AddSongModal isOpen={true} onClose={() => {}} onSubmit={handleSubmit} mode="add" />
    );
    fireEvent.change(screen.getByPlaceholderText(/blinding lights/i), { target: { value: 'Test Song' } });
    fireEvent.change(screen.getByPlaceholderText(/the weeknd/i), { target: { value: 'Test Artist' } });
    fireEvent.change(screen.getByPlaceholderText(/after hours/i), { target: { value: 'Test Album' } });
    fireEvent.change(screen.getByPlaceholderText(/2020/i), { target: { value: '2022' } });
    fireEvent.click(screen.getByRole('button', { name: /add track/i }));
    expect(handleSubmit).toHaveBeenCalled();
  });
}); 