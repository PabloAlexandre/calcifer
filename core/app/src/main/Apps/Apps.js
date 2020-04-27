import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import * as registries from '@calcifer/apps/registry';

import Slot from './Slot';

const Wrapper = styled.div`
  color: white;
  margin-top: 40px;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin: 30px 0;
  opacity: 0.6;
`;

const AppTitle = styled.h3`
  font-size: 16px;
  margin: 30px 0;
  span {
    opacity: 0.6;
    font-weight: 400;
  }
`;

const AppsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 5px) [col-start]);
  grid-column-gap: 10px;
`;

export default function Apps({ user, setScreen, containerContext }) {
  const { setBGColor } = useContext(containerContext);

  useEffect(() => {
    setBGColor('#252a41');
  }, [ ]);

  return (
    <Wrapper>
      <h1>Olá {user.name} {user.emoji}</h1>
      <Subtitle>Seja bem vinda de volta, estava sentindo sua falta</Subtitle>

      <AppTitle>Aplicações <span>({ Object.keys(registries).length })</span></AppTitle>
      <AppsWrapper>
        {
          Object.entries(registries).map(([k, v]) =>
            <Slot key={v.id} {...v} appPath={k} />
          )
        }
      </AppsWrapper>
    </Wrapper>
  )
}