import React, { useState } from 'react';
import styled from 'styled-components';
// import useSocket from '@calcifer/hooks/useSocket';
import * as apps from '@calcifer/apps/tv';
import * as details from '@calcifer/apps/registry';

console.log(details.backdrop);

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
  const [ appName ] = useState('backdrop');
  // const socket = useSocket('http://localhost:3000', 'TV_CLIENT', 1);

  // useEffect(() => {
  //   socket.on('receive-message', ({ message }) => alert(message));
  // }, [ socket ]);

  return (
    apps[appName]()
  );
}