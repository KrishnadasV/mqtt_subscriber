const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    index: true
  },
  payload: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  }
});

module.exports = mongoose.model('Message', messageSchema);