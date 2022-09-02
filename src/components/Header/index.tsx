import React from 'react';

import Logo from '../../assets/logo-seamore.svg';
import { Container, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo seamore" />
        <h1>
          <strong>71</strong> GWEI
        </h1>
      </LogoContainer>
    </Container>
  );
};

export default Header;
