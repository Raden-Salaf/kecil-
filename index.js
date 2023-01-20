const express = require("express");
const bodyParser = require("body-parser");
const mysql =require ("mysql")
const app = express();
const PORT = 1928;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const routerNav = require("./src");

app.use("/api", routerNav);

app.listen(PORT, () => {
  console.log("berhasil menjalankan server " + PORT);
});
