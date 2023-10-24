const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9650323",
  password: "1C6P3NciXW",
  database: "sql9650323",
});

app.get("/", (re, res) => {
  return res.json("From server side");
});

app.get("/teamwork", (req, res) => {
  const sql = "select email from teamwork";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});


app.listen(8081, () => {
  console.log("Listening");
});
