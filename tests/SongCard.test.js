import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SongCard from '../src/components/SongCard';

describe('SongCard', () => {
  const song = {
    _id: '1',
    title: 'Yene Habesha',
    artist: 'Teddy Afro',
    album: 'Ethiopia',
    year: 2017,
    published: '2017-04-15',
    image_url: 'https://i.ytimg.com/vi/4QpRCK1IbiE/hqdefault.jpg',
    location: 'Addis Ababa, Ethiopia',
    description: 'A patriotic anthem celebrating Ethiopian heritage and unity.'
  };

  it('renders song info and Details button', () => {
    render(
      <MemoryRouter>
        <SongCard
          {...song}
          onEdit={jest.fn()}
          onDelete={jest.fn()}
        />
      </MemoryRouter>
    );
    expect(screen.getByText('Yene Habesha')).toBeInTheDocument();
    expect(screen.getByText('Teddy Afro')).toBeInTheDocument();
    expect(screen.getByText('Ethiopia')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    const buttons = screen.getAllByRole('button', { name: /details/i });
    expect(buttons.length).toBeGreaterThan(0);
  });
}); 