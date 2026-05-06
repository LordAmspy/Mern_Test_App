
const mongoose = require("mongoose");

/**
 * connectDB()
 * Connects backend with MongoDB Atlas.
 */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected ✅");

    } catch (error) {

        console.error("Database Connection Failed ❌");
        console.error(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;
