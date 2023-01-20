const express = require("express");
const Route = express.Router();
const paymentContoller = require("./paymentController");

Route.get("/get", paymentContoller.getPayment)
.put("/put",paymentContoller.putPayment)
.post("/post", paymentContoller.postPayment)
.delete("/del",paymentContoller.deletePayment)
module.exports = Route;
