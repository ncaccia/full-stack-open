require("dotenv").config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

const envVar = {
  MONGODB_URI,
  PORT,
};

module.exports = envVar;
