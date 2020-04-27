import React from 'react'
import styled, { css } from 'styled-components';

const CardWrapper = styled.div`
  position: relative;  
  display: grid;
  background: url('${props => props.image}');
  background-size: cover;
  grid-template-columns: 30% 70%;
  grid-column-gap: 10px;
  align-items: center;
  padding: 30px 20px;
  border-radius: 4px;
  z-index: 1;
  
  &:before {
    content: '';
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.7;
    z-index: -1;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.positive ? '#77de97' : '#CC333F'};
  align-items: center;
  border-radius: 50%;
  width: 64px;
  height: 64px;

  span {
    color: white;
    font-size: 28px;
    display: block;
  }
`;

const hiddenText = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const PriceWrapper = styled.div`
  ${hiddenText}
  color: ${props => props.positive ? '#77de97' : '#CC333F'};
  text-align: center;
  font-size: 24px;
  b {
    font-size: 32px;
    margin-left: 5px;
  }
`;

const Card = ({ value, image = 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80' }) => (
  <CardWrapper image={image}>
    <IconWrapper positive={value >= 0}>
      <span className="material-icons">attach_money</span>
    </IconWrapper>
    <PriceWrapper positive={value >= 0}>
      R$ <b>{ value.toFixed(2).split('.').join(',') }</b>
    </PriceWrapper>
  </CardWrapper>
);

const Title = styled.h2`
  font-size: 18px;
  margin: 20px 0;
  font-weight: 400;
  text-transform: uppercase;
`;

const List = ({ value, title, image }) => (
  <>
    <Title>{ title }</Title>
    <Card image={image} value={value} />
  </>
);

export default List;