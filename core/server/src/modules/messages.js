import { handleEvent, broadcastOutput } from '../utils/decorators/event';

export default class Messages {
  
  @handleEvent("open-app")
  @broadcastOutput("TV_CLIENT", "open-app")
  openApp(_, { appKey }) {
    return {
      appKey,
    };
  }

  @handleEvent("tv-send-notification")
  @broadcastOutput("TV_CLIENT", "tv-receive-notification")
  sendMessage(_, { user, message }) {
    console.log(message, user)
    return {
      user,
      id: '_' + Math.random().toString(36).substr(2, 9),
      message
    }
  }
}
