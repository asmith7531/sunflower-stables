const express = require("express");
const path = require("path");
const app = express();
const db = require("../models/");
const port = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const mockResponse = {
  foo: "bar",
  bar: "foo"
};
app.use(express.static(DIST_DIR));
app.get("/api", (req, res) => {
  res.send(mockResponse);
});
app.get("/", (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(
      ` ==> 🌎  Listening on port ${port}. Visit http://localhost: ${port} / in your browser.`
    );
  });
});
