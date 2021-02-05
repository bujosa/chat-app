const { validateJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      const [validate, uid] = validateJWT(socket.handshake.query["x-token"]);

      if (!validate) {
        return socket.disconnect();
      }

      // Validate JSON web Token

      // User active

      // user online

      // Socket Join, uid

      // Listen messages client

      // Disconect

      // Emit all user online

      socket.on("disconnect", () => {
        console.log("cliente desconectado");
      });
    });
  }
}

module.exports = Sockets;
