import React, { useState } from 'react';
import styled from 'styled-components';

import MoneyCurrency from '../../components/Currency';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex-wrap: nowrap;
`;

const InputGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 22px;
  margin: 20px 0;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  color: #333;
  font-size: 22px;
  font-weight: 300;
  background: transparent;
  border: none;
  outline: none;
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
  margin-top: 40px;
  text-align: center;
`;

export default function PriceDetails({ next, setField, getField }) {

  function handlePrice(e) {
    setField('value')(e);
  }

  return (
    <Wrapper>
      <InputGroup onSubmit={next}>
        <Title>Qual é o nome do custo?</Title>
        <Input value={getField('title', '')} placeholder="Compras na quitanda" maxLength="60" autoFocus onChange={setField('title')} />

        <Title>Qual é o valor do custo?</Title>
        <MoneyCurrency value={getField('value', 0)  } component={Input} onChange={handlePrice} />
        <Btn>Criar</Btn>
      </InputGroup>
    </Wrapper>
  )
}