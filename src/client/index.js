const express = require("express");
const Route = express.Router();
const clientController = require("./clientController");

Route.get("/get", clientController.getClient);
Route.put("/put", clientController.putClient);
Route.post("/post", clientController.postClient);
Route.delete("/del", clientController.deleteClient);
module.exports = Route;
