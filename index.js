const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/dataRoutes")
const app = express();
const connectDB = require("./config/db");
const db = require("./config/db");

dotenv.config({path: "./config.env"});

connectDB();

app.use(express.json());

app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});