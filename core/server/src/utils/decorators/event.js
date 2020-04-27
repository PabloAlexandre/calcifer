import eventHandler from '../event-handler';
import container from '../container';

export function handleEvent(eventName) {
  return (target, name, descriptor) => {
    const original = descriptor.value;

    if(typeof original === 'function') {
      descriptor.value = (...args) => {
        return original.apply(this, [container, ...args])
      }
  
      eventHandler.addHandler(eventName, descriptor.value);
    }
  
    return descriptor;
  }
}

export function broadcastOutput(targetType, eventType) {
  return (target, name, descriptor) => {
    const original = descriptor.value;

    if(typeof original === 'function') {
      descriptor.value = (...args) => {
        const response = original.apply(this, [...args])

        container.broadcast(targetType, {
          eventType,
          ...response
        });

        return response;
      }
    }
  
    return descriptor;
  }
}