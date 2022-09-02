import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  background-color: ${props => props.theme.colors.elements};
  border-radius: 2px;
`;
