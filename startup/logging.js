const winston = require("winston");
require("express-async-errors");
const { MongoDB } = require("winston-mongodb");

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.metadata()
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new MongoDB({
      level: "info",
          db: "mongodb://127.0.0.1:27017/educationNodeCrud",
          collection: "log",
          metaKey: "meta",
          options: { useUnifiedTopology: true },
        }),
      ],
    })
    winston.exceptions.handle(
      new winston.transports.File({ filename: 'uncaughtException.log' })
    );


module.exports = logger;
