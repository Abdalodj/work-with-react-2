import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import colors from '../../utils/style/color';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;

function Footer() {
  /* const { toggleTheme, theme } = useContext(ThemeContext); */

  return (
    <ThemeContext.Consumer>
      {({ toggleTheme, theme }) => (
        <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
        </NightModeButton>
      )}
    </ThemeContext.Consumer>
    /*{ <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer> }*/
  );
}

export default Footer;
