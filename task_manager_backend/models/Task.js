const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // You can add more fields like dueDate, status, etc.
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
