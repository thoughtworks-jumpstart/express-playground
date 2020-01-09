const express = require("express");
const apiVersion1 = require("./library_v1");
const apiVersion2 = require("./library_v2");
const app = express();
const PORT = 3000;

app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);

const server = app.listen(PORT, () => {
  console.log(`Library API running on http://localhost:${PORT}`);
});
