const express = require("express");
const app = express();
const PORT = 3000;

const bookRouter = require("./routes/books");
const userRouter = require("./routes/users");

app.use("/books", bookRouter);
app.use("/users", userRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
