import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;

  padding: 16px;

  background-color: ${props => props.theme.colors.elements};
`;

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  > h1 {
    font-size: 12px;
    > strong {
      font-size: 14px;
      color: ${props => props.theme.colors.text};
    }
    margin-left: 12px;
    color: ${props => props.theme.colors.lightPurple};
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const SearchButton = styled.button``;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 20px;
  height: 20px;
  background: transparent;
  cursor: pointer;
  margin-left: 21px;

  > div {
    width: 20px;
    height: 2px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
  }
`;
