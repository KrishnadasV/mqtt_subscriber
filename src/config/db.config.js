const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  uri: process.env.MONGODB_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};

module.exports = dbConfig;