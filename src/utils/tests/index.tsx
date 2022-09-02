import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../../styles/themes/dark';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={dark}>
      <>{children}</>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
