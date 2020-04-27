import container from './utils/container';
import eventHandler from './utils/event-handler';

import './modules';

function configureSocket(socket) {
  return function (message) {
    const { type, id } = JSON.parse(message);

    const socketInfo = {
      socket,
      id,
      type  
    };

    socket.on('event', eventHandler.handle);
    container.add(type, socketInfo);
  }
}

function handleConnection(socket) {
  socket.on('configure', configureSocket(socket));
}

module.exports = {
  handleConnection
}