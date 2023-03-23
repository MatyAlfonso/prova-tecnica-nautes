const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
  },
  done: {
    type: Boolean,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
