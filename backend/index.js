const express = require("express");
const { configDotenv } = require("dotenv");
const connectToDB = require("./db/db");
const authRoutes = require("./routes/authroute");
const taskRoutes = require("./routes/taskroute");
const cors = require("cors");

configDotenv();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Allow requests from all origins
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/task", taskRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Listening on port ${PORT}`);
});
