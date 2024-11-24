const mongoose = require('mongoose');
const logger = require('../utils/logger');

class DatabaseService {
    constructor(config) {
      this.config = config;
    }
  
    async connect() {
      try {
        await mongoose.connect(this.config.uri, this.config.options);
        logger.info('Connected to MongoDB');
      } catch (error) {
        logger.error('MongoDB connection error:', error);
        throw error;
      }
    }
  
    async disconnect() {
      try {
        await mongoose.disconnect();
        logger.info('Disconnected from MongoDB');
      } catch (error) {
        logger.error('MongoDB disconnection error:', error);
        throw error;
      }
    }
  }
  
  module.exports = DatabaseService;