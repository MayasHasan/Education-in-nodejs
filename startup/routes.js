const express = require("express");
require("express-async-errors");
const courseRoutes = require("../routes/courseRoutes");
const userRoutes = require("../routes/userRoutes");
const teacherRoutes = require("../routes/teacherRoutes");
const errorHandler = require("../middleware/errorHandler");
const auth = require("../middleware/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api", userRoutes);
  // app.use(auth)
  app.use("/api/courses", courseRoutes);
  app.use("/api/teachers", teacherRoutes);
  app.use(errorHandler);
};
