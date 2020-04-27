import React from 'react'
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const RowWrapper = styled.div`
  display: grid;
  background: #f9f9f9;
  grid-template-columns: 15% 50% 35%;
  grid-column-gap: 10px;
  margin-bottom: 10px;
  align-items: center;
  padding: 20px 10px;
  border-radius: 3px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  span {
    font-size: 28px;
    display: block;
  }
`;

const hiddenText = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const LabelWrapper = styled.div`
  ${hiddenText}
  font-size: 13px;
  color: #444;
  font-weight: bold;
`;

const PriceWrapper = styled.div`
  ${hiddenText}
  font-size: 9px;

  b {
    color: ${props => props.positive ? '#188038' : '#b54949'};
    margin-left: 5px;
    font-size: 13px;
  }
`;

const Row = ({ price, icon, label, positive }) => (
  <RowWrapper>
    <IconWrapper>{ icon }</IconWrapper>
    <LabelWrapper>{ label }</LabelWrapper>
    <PriceWrapper positive={positive}>R$ <b>{ price.toFixed(2).toString().split('.').join(',') }</b></PriceWrapper>
  </RowWrapper>
);

const ListTitle = styled.h2`
  font-size: 18px;
  margin: 25px 0;
  font-weight: 400;
  text-transform: uppercase;

  span {
    margin-left: 10px;
    font-size: 14px;
    color: ${props => props.positive ? '#188038' : '#b54949'};
  }
`;

const WrappedLink = styled(Link)`
  text-decoration: none;
  color: initial;
`;

const List = ({ items, link, title, positive = false }) => {
  const { pathname } = useLocation();

  return (
    <>
      <WrappedLink to={link ? `${pathname}${link}` : '#'}>
        <ListTitle positive={positive}>{ title } <span>R$ {items.reduce((sum, it) => sum + it.price, 0).toFixed(2).toString().split('.').join(',')}</span></ListTitle>
      </WrappedLink>
      <>
        {
          items.map(it => <Row {...it} key={it.label} positive={positive} />)
        }
      </>
    </>
  );
}
export default List;