const User = require('../models/user');

const userOnline = (uid) => {
    const user = await User.findById(uid);
};

module.exports = {
    userOnline,
};