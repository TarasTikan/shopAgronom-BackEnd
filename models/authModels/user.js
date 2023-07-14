const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../../helpers");
// eslint-disable-next-line no-useless-escape
const emailRegext =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegext,
    },
    password: {
      type: String,
      minLeingth: 6,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);
const User = model("user", userSchema);

module.exports = User;
