const mqtt = require('mqtt');
const logger = require('../utils/logger');
const { MQTTError, handleError } = require('../utils/error.handler');
const { handleMessage } = require('../handlers/message.handler');

class MQTTService {
    constructor(config) {
        this.config = config;
        this.client = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
    }

    connect() {
        try {
            this.client = mqtt.connect(this.config.brokerUrl, this.config.options);
            this.setupEventHandlers();
        } catch (error) {
            handleError(new MQTTError('Failed to create MQTT client', 'CONNECTION_ERROR'));
        }
    }

    setupEventHandlers() {
        this.client.on('connect', () => {
            logger.info('Connected to MQTT broker');
            this.subscribe('#');
            this.reconnectAttempts = 0;
        });

        this.client.on('message', (topic, message) => {
            try {
                handleMessage(topic, message);
            } catch (error) {
                handleError(error);
            }
        });

        this.client.on('error', (error) => {
            handleError(new MQTTError(error.message, error.code));
        });

        this.client.on('offline', () => {
            logger.warn('MQTT client is offline');
        });

        this.client.on('reconnect', () => {
            this.reconnectAttempts++;
            logger.info(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);

            if (this.reconnectAttempts >= this.maxReconnectAttempts) {
                logger.error('Max reconnection attempts reached');
                this.disconnect();
            }
        });
    }

    subscribe(topic) {
        //this.config.topics.forEach(topic => { // subscribing to specific topics
            this.client.subscribe(topic, (error) => {
                if (error) {
                    handleError(new MQTTError(`Failed to subscribe to ${topic}`, 'SUBSCRIPTION_ERROR'));
                } else {
                    logger.info(`Subscribed to topic: ${topic}`);
                }
            });
       // });
    }

    disconnect() {
        if (this.client) {
            this.client.end(true, {}, () => {
                logger.info('Disconnected from MQTT broker');
            });
        }
    }
}

module.exports = MQTTService;