const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
