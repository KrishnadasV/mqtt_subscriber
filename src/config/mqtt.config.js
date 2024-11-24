const dotenv = require('dotenv');
dotenv.config();

const mqttConfig = {
    brokerUrl: process.env.MQTT_BROKER_URL,
    options: {
        clientId: process.env.MQTT_CLIENT_ID + Math.random().toString(16).substring(2, 8),
        // username: process.env.MQTT_USERNAME,
        // password: process.env.MQTT_PASSWORD,
        clean: true,
        reconnectPeriod: 5000,
        connectTimeout: 30 * 1000,
    },
    topics: process.env.MQTT_TOPICS.split(','),
};

module.exports = mqttConfig;