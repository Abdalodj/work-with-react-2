import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ThemeProvider } from '../../utils/context';
import Profile from '../../assets/profile2.png';
import Card from './index';

describe('The Card component', () => {
  it('should render without crash', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card />
        </ThemeProvider>
      </MemoryRouter>
    );
  });

  it('should show the passed picture the passed title and stars only if the card is clicked', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card picture={Profile} title='Mon Titre' />
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(
      screen.findByRole('img', {
        src: 'profile2.png',
        alt: 'freelance'
      })
    ).toBeTruthy();

    /* screen.debug(); */
    const titleDiv = screen.getByTestId('divTitle');
    expect(titleDiv.textContent).toBe(' Mon Titre ');

    const parentDiv = titleDiv.closest('div');
    fireEvent.click(parentDiv);
    expect(titleDiv.textContent).toBe('⭐️ Mon Titre ⭐️');
  });
});
