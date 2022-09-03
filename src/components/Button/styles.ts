import styled, { css } from 'styled-components';

import { IButton } from './index';

const defaultButton = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 51px;
  height: 36px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 13px;
  padding: 6px 16px;
  text-transform: uppercase;
`;

const switcherButton = css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 47px;
  height: 32px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 15px;
  padding: 6px 16px;
  text-transform: uppercase;
`;

export const Container = styled.button<IButton>`
  ${props => {
    if (props.typeButton === 'default') {
      return defaultButton;
    } else {
      return switcherButton;
    }
  }}

  ${props => {
    if (props.typeButton === 'default') {
      return `
      
      `;
    } else {
      return switcherButton;
    }
  }}

  background-color: ${props => {
    if (props.typeButton === 'default') {
      return props.active ? props.theme.colors.lightPurple : 'transparent';
    } else {
      return props.active
        ? props.theme.colors.lightGrey
        : props.theme.colors.lightPurple;
    }
  }};
  color: ${props => {
    if (props.typeButton === 'default') {
      return props.active
        ? props.theme.colors.lightGrey
        : props.theme.colors.darkGrey;
    } else {
      return props.active
        ? props.theme.colors.darkGrey
        : props.theme.colors.grey;
    }
  }};
`;
