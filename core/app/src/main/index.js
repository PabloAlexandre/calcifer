import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import useSocket from '@calcifer/hooks/src/useSocket';

const Wrap = styled.div`
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  opacity: 0.8;
  font-size: 4rem;
  letter-spacing: 10px;
`;

export default function Main() {
  const [ message, setMessage ] = useState('');
  const socket = useSocket('http://localhost:3000', 'APP_CLIENT', 1);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setMessage('');

    socket.emit('send-message', { message });
  }, [message]);

  const handleChangeText = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Wrap>
      <Title>- APP -</Title>

      <form onSubmit={handleSubmit}>

      <input type="text" value={message} onChange={handleChangeText} />
      <button>Enviar</button>
      </form>
    </Wrap>
  );
}