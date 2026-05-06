
const mongoose = require("mongoose");

/**
 * User Schema
 * Blueprint of User collection.
 */

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
