// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hardhat title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Hardhat/i);
    expect(titleElement).toBeInTheDocument();
});
