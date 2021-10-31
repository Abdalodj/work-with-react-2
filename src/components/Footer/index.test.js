import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/context';
import Footer from './';

describe('Footer', () => {
  it('should renter without crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
  });

  it('should change the theme', () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const nightModeButton = screen.getByRole('button');
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️');
    fireEvent.click(nightModeButton);
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙');
  });
});
