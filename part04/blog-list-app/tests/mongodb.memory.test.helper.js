const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongod;

const connect = async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
  console.log("connected to memory-MongoDB uri:");
  console.log("uri:", uri);
};

const disconnect = async () => {
  await mongoose.connection.dropDatabase(); // removes all collections and their data.
  await mongoose.connection.close();
  await mongod.stop();
  console.log("Disconnected to memory-MongoDB");
};

module.exports = { connect, disconnect };
