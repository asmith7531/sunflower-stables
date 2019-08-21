const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const creds = require("../config");
const HTML_FILE = path.join(__dirname, "../dist/index.html");
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get("/api", (req, res) => {
  res.send({ this: "it" });
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/api/send", (req, res, next) => {
  console.log(req.body);
  console.log(req.query);
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const name = firstName + " " + lastName;
  const email = req.query.email;
  const interest = req.query.interest;
  const message = req.query.message;
  const content = `name:${name}\n email: ${email} \n message: ${message} `;

  const mail = {
    from: name,
    to: "austinsmith7531@gmail.com", //Change to email address that you want to receive messages on
    subject: `New Message about "${interest}" from Contact Form`,
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

module.exports = router;
