const info = (...params) => {
  console.log(...params);
};

const error = (...params) => {
  console.log(...params);
};

const loggerFunctions = {
  info,
  error,
};

module.exports = loggerFunctions;
