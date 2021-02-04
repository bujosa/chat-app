const Message = require("../models/message");

const getChat = async (req, res) => {
  const myID = req.uid;
  const messagesFrom = req.params.from;

  const lastThirty = await Message.find({
    $or: [
      { from: myID, to: messagesFrom },
      { from: messagesFrom, to: myID },
    ],
  })
    .sort({ createdAt: "desc" })
    .limit(30);

  res.json({
    ok: true,
    lastThirty,
  });
};

module.exports = { getChat };
