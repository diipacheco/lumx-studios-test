import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100%;
  width: 375px;
  height: 56px;

  padding: 10px;

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
