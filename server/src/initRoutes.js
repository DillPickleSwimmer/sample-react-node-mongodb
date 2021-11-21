const express = require("express");
const path = require("path");

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../../client/build")));

// Enable APIs
const routes = require("./routes");
app.use("/", routes);

module.exports = app;