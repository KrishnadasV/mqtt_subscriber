const mongoose = require('mongoose');
const DeviceDataLog = require('./DeviceDataLog.model');
const deviceDataLogsSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
    index: true
  },
  machines: { type: Map, of: [Object] } // Use Map to store dynamic nested objects
/*   payload: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  } */
});

module.exports = mongoose.model('DeviceDataLogs', deviceDataLogsSchema);