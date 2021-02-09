const User = require("../models/user");
const Message = require("../models/message");

const userOnline = async (uid) => {
  const user = await User.findById(uid);
  user.online = true;
  await user.save();

  return user;
};

const userOffline = async (uid) => {
  const user = await User.findById(uid);
  user.online = false;
  await user.save();

  return user;
};

const getUsers = async () => {
  const users = await User.find().sort("-online");
  return users;
};

const saveMessage = async (payload) => {
  try {
    const message = new Message(payload);
    await message.save(message);
    return message;
  } catch (error) {
    return false;
  }
};

module.exports = {
  userOnline,
  userOffline,
  getUsers,
  saveMessage,
};
