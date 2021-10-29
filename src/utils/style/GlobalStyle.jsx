import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../context';
import { useTheme } from '../hooks';

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
  const { isDark } = useTheme(ThemeContext);
  return <StyledGlobalStyle isDarkMode={isDark} />;
}

export default GlobalStyle;
