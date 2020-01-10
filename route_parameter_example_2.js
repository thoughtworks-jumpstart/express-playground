const express = require("express");
const app = express();
const PORT = 3000;

app.param("userId", (req, res, next, userId) => {
  // do whatever you like with the userId, e.g. looking up the user profile in database
  const userName = "Tom";
  const user = { userId, userName };

  console.log(`req.user is originally: ${req.user}`);
  // and you can set new information in the request object
  req.user = user;
  console.log(`req.user is now: ${req.user}`);

  // now let the next handler to process the request
  next();
});

app.get("/users/:userId", (req, res) => {
  // now you have access to the req.user that was created in the previous handler
  const user = req.user;
  res.send(
    `Got the request for user ${user.userName} whose id is ${user.userId}`
  );
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
