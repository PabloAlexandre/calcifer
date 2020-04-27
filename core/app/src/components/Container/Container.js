import React, { createContext } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import mask from './mask.png';

const center = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const PhoneMask = styled.img`
  ${center}
  display: block;
  max-height: 100vH;
  pointer-events: none;
  max-width: 516px;
`;

const WrapperPhone = styled.div`
  ${center}
  background: ${props => props.bgColor || 'white'};
  left: calc(50% + 2px);
  top: calc(50% + -11px);
  height: calc(90vH + 7px);
  width: 328px;
  max-height: 715px;
  z-index: -1;
  padding: 25px 15px 0;
  overflow-y: auto;
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vH;
  padding: 20px 20px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.bgColor || 'white'};
  }
`;

export const containerContext = createContext();

export default function Container({ isDebug = false, children }) {
  const [ bgColor, setBGColor ] = React.useState('white');

  return (
    <containerContext.Provider value={{
      bgColor,
      setBGColor
    }}>
      { isDebug ? (
          <>
          <PhoneMask src={mask} />
        <WrapperPhone bgColor={bgColor}>
          { children }
        </WrapperPhone>
        </>
        ) : (
          <Wrap>
            <GlobalStyle bgColor={bgColor} />
            { children }
          </Wrap> 
        )
      }
    </containerContext.Provider>
  )
}