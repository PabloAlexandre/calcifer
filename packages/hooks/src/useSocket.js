import { useState, useEffect } from 'react';
import io from 'socket.io-client';

function useSocket(url, type, id) {
  const [ socket, setSocket ] = useState(null);
  
  useEffect(() => {
    const socketInstance = io(url);
    
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
    emit(type, payload) {
      console.log(type, payload, socket)
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