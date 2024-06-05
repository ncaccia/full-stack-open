const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");
const logger = require("./utils/logger");

mongoose.set("strictQuery", false);

if (process.env.NODE_ENV !== "test") {
  logger.info("Connecting to... ", config.MONGODB_URI);
  mongoose
    .connect(config.MONGODB_URI) // connect to MongoDB atlas account
    .then(() => {
      logger.info("connected to MongoDB");
    })
    .catch((err) => {
      logger.error("error connecting to MongoDB:", err.message);
    });
}

app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogsRouter); // use controller routes module

module.exports = app;
