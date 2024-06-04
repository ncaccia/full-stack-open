require("dotenv").config();

const PORT = process.env.PORT;

const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI;

// group vars to enable the trace functionality
const envVar = {
  MONGODB_URI,
  PORT,
};

module.exports = envVar;
