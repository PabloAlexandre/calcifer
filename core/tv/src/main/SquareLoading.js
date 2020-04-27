import React from 'react'
import styled, { keyframes, css } from 'styled-components';

import Loading from './Loading';

const horizontalAnim = keyframes`
  0% {
    opacity: 0;
  }

  13% {
    opacity: 0.6;
  }

  30% {
    opacity: 0.6;
  }

  40% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const verticalAnim = keyframes`
  0% {
    top: -65%;
  }

  100% {
    top: 130%;
  }
`;

const horizontalLineStyle = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  opacity: 0;
  background: #fff;
  animation: ${horizontalAnim} 6s infinite ease-in-out;
`;

const verticalLineStyle = css`
  position: absolute;
  width: 2px;
  height: 65%;
  top: -65%;
  animation: ${verticalAnim} 6s infinite linear;
  background: linear-gradient(0deg, rgba(255, 255, 255,0.3) 0%, rgba(255,255,255,1) 30%,rgba(255,255,255,1) 70%, rgba(255,255,255,0.3) 100%);
  animation-delay: 0.35s;
  z-index: -1;
`;

const Square = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  overflow: hidden;

  .line:nth-child(1) {
    top: 0;
    ${horizontalLineStyle}
  }

  .line:nth-child(2) {
    left: 0;
    ${verticalLineStyle}
  }

  .line:nth-child(3) {
    right: 0;
    ${verticalLineStyle}
  }

  .line:nth-child(4) {
    bottom: 0;
    ${horizontalLineStyle}
    animation-delay: 3s;
  }
`;


const Wrapper = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100vW;
height: 100vH;
background: radial-gradient(circle, rgba(243,134,48,1) 0%, rgba(250,105,0,1) 100%);
`;
export default function () {
  return (
    <Wrapper>

      <Square>
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
        <Loading />
      </Square>
    </Wrapper>
  )
}