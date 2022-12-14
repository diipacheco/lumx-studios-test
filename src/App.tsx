import React from 'react';
import { ThemeProvider } from 'styled-components';

/** Components */
import Header from '~/components/Header';
import Main from '~/Pages/Main';
import GlobalStyles from '~/styles/GlobalStyles';
/** Constants */
import dark from '~/styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
