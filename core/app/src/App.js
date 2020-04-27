import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Main from './main';
import theme from './theme.json';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background: ${props => props.theme.color.primary};
  }  
`;

const Wrapper = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </Router>
);

render(<Wrapper />, document.getElementById('root'));