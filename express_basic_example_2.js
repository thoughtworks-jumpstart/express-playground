const express = require("express");
const app = express();
const PORT = 3000;

const requestHandler1 = (req, res, next) => {
  res.write("Here is a list of students:\n");
  next();
};

const requestHandler2 = (req, res) => {
  res.write("Jesstern\n");
  res.write("Elson\n");
  res.write("Mabel\n");
  res.write("Bye!\n");
  res.end();
};

app.get("/students", requestHandler1, requestHandler2);

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
