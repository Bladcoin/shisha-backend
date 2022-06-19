module.exports = (app) => {
  const users = require("../controllers/users.controller.js");
  var router = require("express").Router();
  // Retrieve all Tutorials
  router.get("/", users.findAll);
  // Retrieve a single Tutorial with id
  router.get("/:id", users.findOne);
  // Update a Tutorial with id
  router.put("/:id", users.update);
  // Delete a Tutorial with id

  app.use("/api/users", router);
};
