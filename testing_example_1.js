const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my homepage");
});

app.get("/books", (req, res) => {
  res.send("You requested a list of books....");
});

app.get("/books/:bookId", (req, res) => {
  res.send(`You request information on book ${req.params.bookId}`);
});

const requireJsonContent = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    res.status(400).send("Server wants application/json!");
  } else {
    next();
  }
};

app.post("/", requireJsonContent, (req, res, next) => {
  res.send("Thanks for the JSON!");
});

module.exports = app;
