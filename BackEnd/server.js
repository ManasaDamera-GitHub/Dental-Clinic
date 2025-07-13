const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./Routes/Routes.js");

const app = express();
app.use(express.json());
app.use("/", userRoutes);
app.use("/", userRoutes);

mongoose.connect(process.env.ATLAS_URI).then(() => {
  console.log("MongoDB connected successfully");
});

app.listen(process.env.port, () => {
  console.log(`Server is running on port http://localhost:${process.env.port}`);
});
