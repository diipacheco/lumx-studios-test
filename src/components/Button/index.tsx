import React from 'react';

import { Container } from './styles';

export interface IButton {
  active?: boolean;
  typeButton: 'default' | 'switcher';
}

const Button: React.FC<IButton> = ({ typeButton, active, children }) => {
  return (
    <Container typeButton={typeButton} active={active}>
      {children}
    </Container>
  );
};

export default Button;
