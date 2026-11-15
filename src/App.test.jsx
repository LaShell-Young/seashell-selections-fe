import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderApp = (initialEntry = '/') => render(
  <MemoryRouter initialEntries={[initialEntry]}>
    <App />
  </MemoryRouter>,
);

test('display the main heading', () => {
  renderApp();

  expect(screen.findAllByText(/seashell selections/i)).not.toBeNull();
});
