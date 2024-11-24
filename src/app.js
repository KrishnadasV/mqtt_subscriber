const mqttConfig = require('./config/mqtt.config');
const MQTTService = require('./services/mqtt.service');
const dbConfig = require('./config/db.config');
const DatabaseService = require('./services/db.service');
const logger = require('./utils/logger');

const startService = async () => {
  try {
    // Initialize and connect to MongoDB
    const dbService = new DatabaseService(dbConfig);
    await dbService.connect();

    // Initialize and connect MQTT service
    const mqttService = new MQTTService(mqttConfig);
    mqttService.connect();

    // Handle application termination
    process.on('SIGINT', () => {
      logger.info('Service is shutting down...');
      mqttService.disconnect();
      process.exit(0);
    });

  } catch (error) {
    logger.error('Failed to start service:', error);
    process.exit(1);
  }
};

startService();