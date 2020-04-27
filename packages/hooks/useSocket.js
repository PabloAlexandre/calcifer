import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function useSocket(url = 'http://calcifer-server.piripak.cc', type, id) {
  const [ socket, setSocket ] = useState(null);
  
  useEffect(() => {
    if(!id) return;

    const socketInstance = io(url);
    console.log('open socket');
    
    socketInstance.on('connect', () => {
      socketInstance.emit('configure', JSON.stringify({
        id, 
        type
      }));
      setSocket(socketInstance);
    });

    return () => socketInstance.disconnect();
  }, [url, type, id]);

  return {
    connected: !!socket && socket.connected,
    user: { id },
    emit(type, payload) {
      socket && socket.emit('event', JSON.stringify({
        eventType: type,
        ...payload
      }));
    },
    on(type, fn) {
      socket && socket.on(type, (data) => {
        fn(JSON.parse(data));
      });
    }
  }
}

export default useSocket;