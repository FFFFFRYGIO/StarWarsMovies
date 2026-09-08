import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';
import axios from 'axios';
import App from './App';

vi.mock('axios');

const films = [
  { episode_id: 4, title: 'A New Hope', release_date: '1977-05-25', characters: [] },
  { episode_id: 5, title: 'The Empire Strikes Back', release_date: '1980-05-17', characters: [] },
];

afterEach(() => {
  vi.resetAllMocks();
});

test('renders the films returned by the API', async () => {
  axios.get.mockResolvedValue({ data: { results: films } });

  render(<App />);

  expect(await screen.findByText('A New Hope')).toBeInTheDocument();
  expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
});

test('filters the films by the search term', async () => {
  axios.get.mockResolvedValue({ data: { results: films } });

  render(<App />);
  await screen.findByText('A New Hope');

  await userEvent.type(screen.getByPlaceholderText(/search by film name/i), 'empire');

  expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
  expect(screen.queryByText('A New Hope')).not.toBeInTheDocument();
});
