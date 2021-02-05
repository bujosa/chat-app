const User = require("../models/user");

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

module.exports = {
  userOnline,
  userOffline,
};
