import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import Hero from './Hero';

const entertainment = [
  {
    title: 'First film',
    trailerLink: 'https://example.com/first',
    poster: 'first-poster.jpg',
    backdrops: ['first-backdrop.jpg', 'second-backdrop.jpg'],
  },
  {
    title: 'Second film',
    trailerLink: 'https://example.com/second',
    poster: 'second-poster.jpg',
    backdrops: ['third-backdrop.jpg'],
  },
];

afterEach(() => {
  vi.useRealTimers();
});

test('allows moving to the next and previous backdrop', () => {
  render(<Hero entertainment={entertainment} />);

  expect(screen.getByText('1 / 3')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Next backdrop' }));
  expect(screen.getByText('2 / 3')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Previous backdrop' }));
  expect(screen.getByText('1 / 3')).toBeInTheDocument();
});

test('advances to the next backdrop automatically', () => {
  vi.useFakeTimers();
  render(<Hero entertainment={entertainment} />);

  act(() => {
    vi.advanceTimersByTime(7000);
  });

  expect(screen.getByText('2 / 3')).toBeInTheDocument();
});
