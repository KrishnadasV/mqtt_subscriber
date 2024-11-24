const logger = require('./logger');

class MQTTError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'MQTTError';
        this.code = code;
    }
}

const handleError = (error) => {
    logger.error({
        message: error.message,
        code: error.code,
        stack: error.stack,
    });

    if (error instanceof MQTTError) {
        // Handle specific MQTT errors
        switch (error.code) {
            case 'ECONNREFUSED':
                logger.error('Failed to connect to MQTT broker');
                break;
            case 'ENOTFOUND':
                logger.error('MQTT broker not found');
                break;
            default:
                logger.error('Unknown MQTT error occurred');
        }
    }
};

module.exports = { MQTTError, handleError };