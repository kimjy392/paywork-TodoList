import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Style/theme';
import { GlobalStyles } from 'Style/GlobalStyles';
import { Home } from 'Pages/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
