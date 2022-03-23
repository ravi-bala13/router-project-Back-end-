const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const womensController = require("./controllers/womens");

app.use("/womens", womensController);

module.exports = app;
