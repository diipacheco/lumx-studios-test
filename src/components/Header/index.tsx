import React from 'react';

import Logo from '../../assets/logo-seamore.svg';
import SearchIcon from '../../assets/search.svg';
import {
  Container,
  LogoContainer,
  NavigationContainer,
  SearchButton,
  StyledBurger,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Logo seamore" />
        <h1>
          <strong>71</strong> GWEI
        </h1>
      </LogoContainer>
      <NavigationContainer>
        <SearchButton>
          <img src={SearchIcon} alt="Search Icon" />
        </SearchButton>
        <StyledBurger data-testid="hamburger-menu">
          <div />
          <div />
          <div />
        </StyledBurger>
      </NavigationContainer>
    </Container>
  );
};

export default Header;
