const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  // synchronous error
  throw new Error(" 😱! Error! Error!");
});

// app.use(function(err, req, res, next) {
//   // Internal server error
//   // console.log(err)
//   res.status(500);
//   res.send(
//     `Error: ${err} </br>
//     Error stack: ${err.stack}`
//   );
// });

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
