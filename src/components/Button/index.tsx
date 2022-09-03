import React from 'react';

import { Container } from './styles';

export interface IButton {
  active?: boolean;
}

const Button: React.FC<IButton> = ({ active, children }) => {
  return <Container active={active}>{children}</Container>;
};

export default Button;
