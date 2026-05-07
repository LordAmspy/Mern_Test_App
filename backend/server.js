
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middleware/errorMiddleware");

const app = express();

/**
 * Connect MongoDB
 */
connectDB();

/**
 * Middleware
 */
app.use(cors());

/**
 * express.json()
 * Converts incoming JSON into JS object.
 */
app.use(express.json());

/**
 * Test Route
 */
app.get("/", (req, res) => {
    res.send("Backend Running 🚀");
});

/**
 * Routes
 */
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

/**
 * Error Middleware
 */
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
