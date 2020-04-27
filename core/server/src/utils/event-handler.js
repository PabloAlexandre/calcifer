const eventContainer = new Map();

export default {
  handle(e) {
    const event = JSON.parse(e);
    const fn = eventContainer.get(event.eventType);
    fn && fn(event);
  },
  addHandler(type, fn) {
    eventContainer.set(type, fn);
  }
}