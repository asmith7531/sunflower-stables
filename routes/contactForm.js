var express = require("express");
const app = express();
var router = express.Router();
const axios = require("axios");
const db = require("../models/contactUs");

app.get("/api", function(req, res) {
  res.send("API home page");
});

router.post("/api/contact-me", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  var mail = {
    from: name,
    to: "austinsmith7531@gmail.com",
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});
