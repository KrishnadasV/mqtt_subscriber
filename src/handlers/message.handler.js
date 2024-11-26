const logger = require('../utils/logger');
const DeviceDataLogs = require('../models/DeviceDataLogs.model');
const mapDeviceDataToSchema = require('../utils/dataMapper');
const handleMessage = (topic, message) => {
  try {
    const payload = JSON.parse(message.toString());
    logger.info(`Received message on topic ${topic}:`, payload);

    processSensorData(topic, payload);
    // Add your business logic here
    // Example: Process different topics
    switch (topic) {
      case 'specific_topics_to_process':
        break;
      case 'device/status':
        processDeviceStatus(payload);
        break;
      default:
        logger.info(`No specific handler for topic ${topic}`);
    }
  } catch (error) {
    logger.error('Error processing message:', error);
    throw error;
  }
};

const processSensorData = async (topic, payload) => {
  // Process sensor data
  logger.info('Processing sensor data:', payload);
  await saveRawMessage(topic, payload);
};

const processDeviceStatus = (status) => {
  // Process device status
  logger.info('Processing device status:', status);
};

const saveRawMessage = async (topic, payload) => {
  try {

    let org = await DeviceDataLogs.findOne({ organization: topic });

    console.log("new scheema org", org);

    if (!org) {
      console.log("new scheema no org creating");
      org = new DeviceDataLogs({ organization: topic, machines:{} });
    }

    Object.keys(payload.tags).forEach(key => {
      const deviceData = mapDeviceDataToSchema(payload.tags[key], key, payload.timestamp);
      console.log("new scheema deviceData", deviceData);
      if (org.machines.has(key)) {
        console.log("new scheema deviceData exists adding", org.machines.get(key));
        org.machines.get(key).push(deviceData);
      } else {
        console.log("new scheema deviceData no creating", deviceData);
        org.machines.set(key, [deviceData]);
      }
    });
    await org.save();

    logger.info('Raw message saved to database');
  } catch (error) {
    logger.error('Error saving raw message:', error);
    throw error;
  }
};

module.exports = { handleMessage };