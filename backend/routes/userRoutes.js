
const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

/**
 * GET + POST Routes
 */
router.route("/")
    .get(getUsers)
    .post(createUser);

/**
 * GET by ID + UPDATE + DELETE
 */
router.route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
