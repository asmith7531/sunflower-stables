var express = require("express");
const app = express();
var router = express.Router();
const axios = require("axios");
const db = require("../models/contactUs");
app.get("/api", function(req, res) {
  res.send("API home page");
});
app.post("/api/contact-us", (req, res) => {
  contactForm(req, res);
  console.log("submitted");
});
