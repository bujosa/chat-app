class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("cliente conectado");
      // Validate JSON web Token
      // User active
      // user online
      // Socket Join, uid
      // Listen messages client
      // Disconect
      // Emit all user online
      socket.on("disconect", () => {
        console.log("cliente desconectado");
      });
    });
  }
}

module.exports = Sockets;
