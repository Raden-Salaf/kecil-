const mysql = require ("mysql")

const koneksi = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "client",
});

koneksi.connect(function (err) {
  !err
    ? console.log("berhasil koneksi database")
    : console.log("gagal terhubung database");
});

module.exports = koneksi;
