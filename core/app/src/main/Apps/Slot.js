import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  display: inline-flex;
  flex-direction: column;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const SlotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  background: ${props => props.bgColor};
  width: 100%;
  height: 110px;
  border-radius: 8px;
  font-size: 36px;
  
  :nth-child(even) {
    margin-left: 10px;
  }
`;

const SlotName = styled.p`
  margin: 10px 0;
  font-size: 14px;
  opacity: 0.6;
  text-align: center;
`;

function Slot({ bgColor, color, name, appPath, location }) {
  return (
    <Wrapper to={`/${appPath}${location.search}`}>
      <SlotWrapper color={color} bgColor={bgColor}>
        { name[0] }
      </SlotWrapper>
      <SlotName>{ name }</SlotName>
    </Wrapper>
  );
}

export default withRouter(Slot);