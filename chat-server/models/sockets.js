const {
  userOnline,
  userOffline,
  getUsers,
  saveMessage,
} = require("../controllers/sockets");
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

      // Join space
      socket.join(uid);

      // Validate JSON web Token

      // User active

      // user online
      this.io.emit("list-users", await getUsers());

      // Socket Join, uid

      socket.on("private-message", async (payload) => {
        const message = await saveMessage(payload);
        this.io.to(message.from).emit("private-message", message);
        this.io.to(message.to).emit("private-message", message);
      });
      // Listen messages client

      // Disconect

      // Emit all user online

      socket.on("disconnect", async () => {
        await userOffline(uid);
        this.io.emit("list-users", await getUsers());
      });
    });
  }
}

module.exports = Sockets;
