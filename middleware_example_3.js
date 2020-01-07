const express = require("express");
const app = express();
const PORT = 3000;

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
