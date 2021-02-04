class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // Validate JSON web Token
      // User active
      // user online
      // Socket Join, uid
      // Listen messages client
      // Disconect
      // Emit all user online
    });
  }
}

module.exports = Sockets;
