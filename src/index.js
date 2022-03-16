const express = require("express");

const app = express();

const usercontroller = require("../src/controler/usercontroler");

const gallerycontroller = require("../src/controler/gallerycontroller");

app.use(express.json())

app.use("/user", usercontroller);

app.use("/gallery", gallerycontroller);

module.exports = app;

