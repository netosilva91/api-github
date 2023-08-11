import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders devNETO message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fala Netera/i);
  expect(linkElement).toBeInTheDocument();
});
