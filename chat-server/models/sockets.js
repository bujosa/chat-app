const { userOnline, userOffline } = require("../controllers/sockets");
const { validateJWT } = require("../helpers/jwt");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", async (socket) => {
      const [validate, uid] = validateJWT(socket.handshake.query["x-token"]);

      if (!validate) {
        return socket.disconnect();
      }

      await userOnline(uid);

      // Validate JSON web Token

      // User active

      // user online

      // Socket Join, uid

      // Listen messages client

      // Disconect

      // Emit all user online

      socket.on("disconnect", async () => {
        await userOffline(uid);
      });
    });
  }
}

module.exports = Sockets;
