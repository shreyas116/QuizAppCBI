const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/user");
const dbConnect = require("./config/database");

require("dotenv").config();

app.use(express.json());
app.use("/api/v1", userRoutes);
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

const PORT = process.env.PORT || 4000;

dbConnect();

app.listen(PORT, () => {
  console.log(`Server started at port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>Backend is runnig at ${PORT} and this is '/' ROUTE </h1>`);
});
