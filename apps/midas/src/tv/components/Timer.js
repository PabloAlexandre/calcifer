import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.h1`
  display: inline-flex;
  color: white;
  font-size: 5rem;
  font-weight: 300;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`;

function getFormattedTime() {
  const date = new Date();
  return `${("0"+date.getHours()).slice(-2)}:${("0"+date.getMinutes()).slice(-2)}`;
}

export default function Timer() {
  const [ hour, setHour ] = useState(getFormattedTime());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(getFormattedTime());
    }, 1000);

    () => clearInterval(interval);
  }, []);

  return (
    <TimerWrapper>
      { hour }
    </TimerWrapper>
  )
}