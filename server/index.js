const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, "../dist");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const index = require("../routes/index");
// const favicon = require('serve-favicon');
app.use(index);
app.use(express.static(DIST_DIR));
app.use(logger("dev"));
app.use(cookieParser());
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});
app.listen(port, () => {
  console.log(
    ` ==> 🌎  Listening on port ${port}. Visit http://localhost: ${port} / in your browser.`
  );
});
