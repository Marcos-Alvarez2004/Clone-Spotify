const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user"));
app.use("/api/playlist", require("./routes/playlist"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});