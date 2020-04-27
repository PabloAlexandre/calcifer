import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

import Logo from '../components/icons/Logo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export default function Loading (){

  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <Wrapper>
      <Logo loading={isLoading} />
    </Wrapper>
  )
}