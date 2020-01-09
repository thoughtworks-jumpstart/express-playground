const express = require("express");
const api = express.Router();
const PORT = 3000;

const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");

api.use("/books", booksRouter);
api.use("/users", usersRouter);

api.get("/", (req, res) => {
  res.send("Version 2 of library API");
});

module.exports = api;
