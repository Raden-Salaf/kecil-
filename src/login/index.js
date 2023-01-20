const express = require("express");
const Route = express.Router();
const loginController = require("./loginController")

Route.get("/get", loginController.getLogin)
Route.put("/put", loginController.putLogin)
Route.post("/post", loginController.postLogin)
Route.delete("/del", loginController.deleteLogin)
module.exports = Route;