import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
`;

const Image = styled.img`
  width: 95%;
`;

const Description = styled.h2`
font-size: 16px;
font-weight: 500;
margin: 40px 0 0;
padding: 0 15px;
color: #333;
line-height: 23px;
`;

const InputGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 16px;
  font-weight: 300;
  background: transparent;
  border: none;
  padding: 0 15px;
  margin: 10px 0;
  outline: none;
  height: 60px;
  resize: none;
`;

const Btn = styled.button`
  border: 2px solid #f19470;
  background: transparent;
  color: #f19470;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 20px;
  width: 80%;
  text-align: center;
`;

export default function Backdrop({ containerContext, socket, user }) {
  const [ message, setMessage ] = useState('');
  const { setBGColor } = useContext(containerContext);

  useEffect(() => {
    setBGColor('#FFF0B8');
  }, []);

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    socket.emit('tv-send-notification', {
      message,
      user,
    });
    
    setMessage('');
  }

  return (
    <Wrapper>
      <Description>
        Envie uma mensagem para seu ente querido
      </Description>
      <InputGroup onSubmit={handleSubmit}>
        <TextArea maxLength="60" placeholder="Olá Calcifer" autoFocus onChange={handleMessage} value={message} />
        <Btn>Enviar :3</Btn>
      </InputGroup>
    </Wrapper>
  )
}