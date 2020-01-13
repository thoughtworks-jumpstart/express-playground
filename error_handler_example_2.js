const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // synchronous error
  error = new Error(" 😱! Error! Error!");
  error.code = 200;
  throw error;
});

app.use(function(err, req, res, next) {
  res.status(err.code || 500);
  res.send(
    `Error: ${err} </br>
    Error Status Code: ${err.code} <br>
    Error stack: ${err.stack}`
  );
  //res.send(console.log(err));
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
