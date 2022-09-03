import styled from 'styled-components';

import { IButton } from './index';

export const Container = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 51px;
  height: 36px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 12px;
  padding: 6px 16px;
  text-transform: uppercase;

  background-color: ${props =>
    props.active ? props.theme.colors.lightPurple : 'transparent'};
  color: ${props =>
    props.active ? props.theme.colors.lightGrey : props.theme.colors.darkGrey};
`;
