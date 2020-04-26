const socketHash = new Map();

function add(type, socketInfo) {
  const container = socketHash.has(type) ? socketHash.get(type) : [];
  container.push(socketInfo);

  socketHash.set(type, container);

  socketInfo.socket.on('disconnect', () => {
    const filteredContainer = socketHash.get(type).filter(it => it.id !== socketInfo.id);
    socketHash.set(filteredContainer);
  });

}

function broadcast(type, event) {
  const { eventType } = event;
  socketHash.get(type).forEach(socketInfo => {
    socketInfo.socket.emit(eventType, JSON.stringify(event));
  });
}

function sendToId(id, event) {
  const { eventType } = event;

  socketHash.values().forEach(container => {
    container.forEach((socketInfo) => {
      if(socketInfo.id === id) {
        socketInfo.socket.emit(eventType, JSON.stringify(event));
      }
    });
  });
}

module.exports = {
  add,
  broadcast,
  sendToId
}