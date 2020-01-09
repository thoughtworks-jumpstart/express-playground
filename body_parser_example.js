const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const userName = req.body.username;
  res.send(`You would like to create a user with username: ${userName}.`);
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
