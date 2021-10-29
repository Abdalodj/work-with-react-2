import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context';

const StyledGlobalStyle = createGlobalStyle`
  div {
    font-family: 'Trebuchet MS', 'Helvetica', sans-serif;
  }

  body {
      margin: 0;
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#2F2E41' : 'white'};
      color: ${({ isDarkMode }) => isDarkMode && 'white'};
      margin: 0px;
    }
`;

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
