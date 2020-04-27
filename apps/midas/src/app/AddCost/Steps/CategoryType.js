import React from 'react'
import styled from 'styled-components';

import { MappedIconsByCategory, MappedLabel } from '../../Home/utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex-wrap: nowrap;
`;

const Title = styled.h1`
  font-weight: 300;
  opacity: 0.5;
  font-size: 22px;
  margin: 20px 0;
`;

const CategoryWrapper = styled.div`
  display: grid;
  margin: 20px 0;
  column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: repeat(3, calc(33.3% - 6.6px) [col-start]);
`;

const NameWrapper = styled.div`
  text-transform: capitalize;
  font-size: 10px;
  margin-top: 15px;
`;

const Slot = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border: 1px solid ${props => props.active ? 'transparent' : '#ccc'};
  border-radius: 3px;
  background: ${props => props.active ? '#eb7c21' : 'transparent'};
  color: ${props => props.active ? '#fff' : 'initial'};

  span {
    color: ${props => props.active ? '#fff' : '#8e8f94'} !important;
  }
`;

const Btn = styled.button`
  border: 2px solid #eb7c21;
  background: transparent;
  color: #eb7c21;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 20px;
  width: 80%;
  text-align: center;
  margin-top: 20px;
`;

const Center = ({ children }) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    {children }
  </div>
)

const CategorySlot = ({ icon, name, onSelect, active }) => (
  <Slot onClick={onSelect} active={active}>
    { icon }
    <NameWrapper>{ name }</NameWrapper>
  </Slot>
)
const formattedCategories = Object.entries(MappedIconsByCategory).map(([ name, icon ]) => ({
  type: name,
  name: MappedLabel[name],
  icon
}));

export default function Category({ next, getField, setField }) {
  function onSelectCategory(type) {
    return () => {
      setField('category')(type);
    }
  }

  return (
    <Wrapper>
      <Title>Selecione a categoria do custo</Title>
      <CategoryWrapper>
        {
          formattedCategories.map(it => <CategorySlot active={getField('category') === it.type} key={it.type} {...it} onSelect={onSelectCategory(it.type)} />)
        }
      </CategoryWrapper>
      <Center>
        <Btn onClick={next}>Continuar</Btn>
      </Center>
    </Wrapper>
  )
}