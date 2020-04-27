import React, { useState, useEffect } from 'react';

import mock from './backdrop-mock.jpg';
import S from './styles';

import Background from './components/Background';
import Timer from './components/Timer';
import Notification from './components/Notification';

export default function Backdrop({ socket }) {
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    if(!socket.connected) return;

    socket.on('tv-receive-notification', (message) => {
      setMessages(msgs => [message, ...msgs]);
    });
  }, [ socket.connected ]);

  return (
    <Background image={mock}>
      <S.NotificationContainer>
        { 
          messages.map(it => <Notification key={it.id} {...it} />)
        }
      </S.NotificationContainer>
      <S.TimerContainer>
        <Timer />
        <S.CityName>Icaraí, Niterói</S.CityName>
      </S.TimerContainer>
    </Background>
  );
}