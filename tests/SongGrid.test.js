import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SongGrid from '../src/components/SongGrid';

describe('SongGrid', () => {
  it('renders a grid of SongCards', async () => {
    const songs = [
      { _id: '1', title: 'Song 1', artist: 'Artist 1', album: 'Album 1', year: 2020 },
      { _id: '2', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', year: 2021 },
    ];
    render(
      <MemoryRouter>
        <SongGrid songs={songs} onEdit={jest.fn()} onDelete={jest.fn()} />
      </MemoryRouter>
    );
    await screen.findByText('Song 1');
    await screen.findByText('Song 2');
  });
}); 