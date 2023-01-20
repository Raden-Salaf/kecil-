const express = require("express");
const Route = express.Router();


const payment = require("./payment");
const client = require("./client");
const login = require("./login");

Route.use("/login", login).use("/client", client).use("/payment",payment);

module.exports = Route;
