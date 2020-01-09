const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log("common middleware function was called!");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("middleware function for /users was called!");
  next();
});

// this will only be called for POST requests
app.post("/users", (req, res, next) => {
  console.log("second middleware function for /users was called!");
  next();
});

// this will only be called for GET requests
app.get("/users", (req, res, next) => {
  console.log("third middleware function for /users was called!");
  next();
});

app.get("/users", (req, res) => {
  console.log("users list was shown");
  res.send("Here is a list of users:....");
});

app.get("/books", (req, res) => {
  console.log("books list was shown");
  res.send("Here is a list of books:....");
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
