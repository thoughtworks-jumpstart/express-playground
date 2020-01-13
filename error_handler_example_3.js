const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function(req, res, next) {
  // assume some asynchronous error happens
  const err = new Error("Unexpected network error");
  next(err);
});

app.get("/", function(req, res, next) {
  console.log("You should not see this line in the console 😡");
});

app.use(function(err, req, res, next) {
  if (err.message === "Unexpected network error") {
    console.log("I don't know how to handle network error. Pass it on.");
    next(err);
  } else {
    console.log("Unknown error. Pass it on.");
    next(err);
  }
});

app.use(function(err, req, res, next) {
  res.status(500);
  res.send({ error: "internal server error" });
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
