class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    // Send every message to the action provider for intelligent handling
    this.actionProvider.handleUserMessage(message);
  }
}

export default MessageParser;
