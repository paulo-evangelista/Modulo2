const express = require("express");
const path = require("path");
const bp = require("body-parser");
const app = express();
const hostname = "127.0.0.1";
const port = 3030;
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("database.db");

app.use(express.static("./Frontend/"));
app.use(bp.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/getName", (req, res) => {
  db.get("SELECT * FROM user", (err, response) => {
    res.send(response);
    res.end();
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
