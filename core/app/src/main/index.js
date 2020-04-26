import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import useSocket from '@calcifer/hooks/useSocket';

import Container from '../components/Container';

import Login from './Login';

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  font-size: 4rem;
  letter-spacing: 10px;
  text-align: center;
`;

export default function Main() {
  // const socket = useSocket('http://localhost:3000', 'APP_CLIENT', 1);
  // const [ message, setMessage ] = useState('');
  const [ isDebug ] = useState(window.location.href.includes('debug=true'));

  // const handleSubmit = useCallback((e) => {
  //   e.preventDefault();
  //   setMessage('');

  //   socket.emit('send-message', { message });
  // }, [message]);

  // const handleChangeText = (e) => {
  //   setMessage(e.target.value);
  // };

  return (
    <Container isDebug={isDebug}>
      <Login />
    </Container>
  )
}