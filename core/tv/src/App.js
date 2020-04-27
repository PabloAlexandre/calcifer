import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Main from './main';
import Loading from './main/SquareLoading';

import theme from './theme.json';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background: radial-gradient(circle, rgba(243,134,48,1) 0%, rgba(250,105,0,1) 100%);
    font-family: 'Montserrat', sans-serif;
  }  
`;

const Wrapper = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {/* <Main /> */}
    <Loading />
  </ThemeProvider>
);

render(<Wrapper />, document.getElementById('root'));