import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Main from './main';
import theme from './theme.json';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    background: ${props => props.theme.color.primary};
  }  
`;

const Wrapper = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);

render(<Wrapper />, document.getElementById('root'));