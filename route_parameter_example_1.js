const express = require("express");
const app = express();
const PORT = 3000;

app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
