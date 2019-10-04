const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.use(cors());
const users = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", users);

app.use(express.static("name/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "name", "build", "index.html"));
});

port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Port started at :8080");
});
