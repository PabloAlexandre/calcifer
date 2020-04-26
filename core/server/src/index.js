const container = require('./modules/container');
const messages = require('./modules/messages');

function configureSocket(socket) {
  return function (message) {
    const { type, id } = JSON.parse(message);

    const socketInfo = {
      socket,
      id,
      type
    };

    socket.on('event', e => {
      const event = JSON.parse(e);
      console.log(event);
      messages.onEvent(event);
    });

    container.add(type, socketInfo);
  }
}

function handleConnection(socket) {
  socket.on('configure', configureSocket(socket));
}

module.exports = {
  handleConnection
}