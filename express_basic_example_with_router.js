const express = require("express");
const app = express();
const PORT = 3000;

const booksRouter = require("./routes/books");
const usersRouter = require("./routes/users");

app.use("/books", booksRouter);
app.use("/users", usersRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
