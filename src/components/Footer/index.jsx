import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import colors from '../../utils/style/color';
import EmailInput from '../EmailInput';

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
  const { toggleTheme, theme } = useTheme();

  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme !== 'dark' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  );
}

export default Footer;
