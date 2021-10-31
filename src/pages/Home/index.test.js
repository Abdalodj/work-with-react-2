import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ThemeProvider } from '../../utils/context';
import Home from './';

describe('The Home component', () => {
  it('should render without crach', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
  });
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );
    //screen.getByText();
    /*     screen.debug(); */
    /* const expectation =
      'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'; */
    expect(
      screen.getByRole('heading', {
        level: 2,
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
      })
    ).toBeTruthy();
  });
});
