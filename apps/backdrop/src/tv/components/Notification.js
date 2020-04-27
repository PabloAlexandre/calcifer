import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 350px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.5);
  height: 60px;
  padding: 5px;
  align-items: center;
  margin: 12px 0;
`;

const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  background: white;
  font-size: 22px;
`;

const Message = styled.div`
  display: inline-flex;
  padding: 0 15px;
  overflow: hidden;
  max-height: 40px;
  text-overflow: ellipsis; 
`;

export default function({ user: { emoji = '🔥' }, message = 'Hi, I\'m Calcifer'}) {
  return (
    <Wrapper>
      <Icon>{ emoji }</Icon>
      <Message>{ message }</Message>
    </Wrapper>
  );
}
