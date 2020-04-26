const container = require('./container');

const eventsToHandle = {
  'send-message': (payload) => {
    container.broadcast('TV_CLIENT', {
      eventType: 'receive-message',
      message: payload.message
    });
  }
}

module.exports = {
  onEvent(e) {
    const event = eventsToHandle[e.eventType];
    if(event) event(e);
  }
}