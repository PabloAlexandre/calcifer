import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { containerContext } from '../../components/Container/Container'
import image from './image.png';

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

const InputGroup = styled.div`
  margin: 20px 0;
`;

const Input = styled.input`
  width: 100%;
  color: #333;
  font-size: 22px;
  font-weight: 300;
  background: transparent;
  border: none;
  padding: 0 15px;
  margin: 10px 0;
  outline: none;
`;

const Btn = styled.a`
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

export default function Login({ submit }) {
  const [ name, setName ] = useState('');
  const [ emoji, setEmoji ] = useState('');
  const { setBGColor } = useContext(containerContext);

  useEffect(() => {
    setBGColor('#FFF0B8');
  }, []);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmoji(e) {
    setEmoji(e.target.value);
  }

  function handleSubmit() {
    const userData = {
      name,
      emoji,
      id: '_' + Math.random().toString(36).substr(2, 9)
    }

    localStorage.setItem('calcifer-user-data', JSON.stringify(userData));
    submit(userData);
  }

  return (
    <Wrapper>
      <Image src={image} />
      <Description>
        Olá, seja bem vindo. Para começar, como podemos te chamar?
      </Description>
      <InputGroup>
        <Input placeholder="Calcifer" autoFocus onChange={handleChangeName} value={name}/>
        <Input placeholder="Seu emoji" autoFocus onChange={handleChangeEmoji} value={emoji}/>
      </InputGroup>
      <Btn role="button" onClick={handleSubmit}>Continuar</Btn>
    </Wrapper>
  )
}