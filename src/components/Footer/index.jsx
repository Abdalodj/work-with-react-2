import styled from 'styled-components';
import { ThemeContext } from '../../utils/context';
import { useTheme } from '../../utils/hooks';
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
  const { toggleTheme, isDark } = useTheme(ThemeContext);

  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {!isDark ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  );
}

export default Footer;
