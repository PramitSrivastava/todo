const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
  description: {
    type: String,
  },
  responsible: {
    type: String,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Task", Task);
