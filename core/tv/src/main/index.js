import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useSocket from '@calcifer/hooks/useSocket';
import * as apps from '@calcifer/apps/tv';

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  color: white;
  font-size: 4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 10px;
`;

export default function Main() {
  const socket = useSocket('http://localhost:3000', 'TV_CLIENT', 1);
  const [ appName, setAppName ] = useState('backdrop');

  useEffect(() => {
    socket.on('open-app', ({ appKey }) => setAppName(appKey));
  }, [ socket ]);

  return appName ? apps[appName]({ socket }) : (<Title>Calcifer</Title>);
}