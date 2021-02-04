const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniquie: true,
  },
  password: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

UserSchema.method("toJSON", function () {
  const { _v, _id, password, ...object } = this.toObject();
  Object.uid = _id;
  return object;
});

module.exports = model("User", UserSchema);
