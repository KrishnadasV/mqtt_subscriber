const logger = require('../utils/logger');
const Message = require('../models/message.model');

const handleMessage = (topic, message) => {
  try {
    const payload = JSON.parse(message.toString());
    logger.info(`Received message on topic ${topic}:`, payload);
    
    // Add your business logic here
    // Example: Process different topics
    switch (topic) {
      case 'sensor/data':
        processSensorData(topic, payload);
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
    const message = new Message({
      topic,
      payload
    });
    await message.save();
    logger.info('Raw message saved to database');
  } catch (error) {
    logger.error('Error saving raw message:', error);
    throw error;
  }
};

module.exports = { handleMessage };