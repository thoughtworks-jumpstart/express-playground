const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my homepage");
});

/* GET books listing. */
app.get("/books", (req, res) => {
  res.send("You requested a list of books....");
});

/* GET a specific book with ID */
app.get("/books/:bookId", (req, res) => {
  res.send(`You request information on book ${req.params.bookId}`);
});

/* GET users listing. */
app.get("/users", (req, res) => {
  res.send("You requested a list of users....");
});

/* GET a specific user with ID */
app.get("/users/:userId", (req, res) => {
  res.send(`You request information on user ${req.params.userId}`);
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
