const express = require("express");
const app = express();
const PORT = 3000;

const arrowFunction = (req, res, next) => {
  console.log("I am an arrow function!");
  next();
};

app.use(arrowFunction);

const checkColor = () => {
  return (req, res, next) => {
    if (req.query.color) {
      res.send("I have blue!");
    } else {
      next();
    }
  };
};

app.use(checkColor());

app.get("/users", function(req, res) {
  console.log("users list was shown");
  res.send("Here is a list of users:....");
});

app.get("/books", function(req, res) {
  console.log("books list was shown");
  res.send("Here is a list of books:....");
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
