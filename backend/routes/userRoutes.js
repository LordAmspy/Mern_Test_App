
const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController");

const {
    protect,
    authorizeRoles
} = require("../middleware/authMiddleware");

/**
 * Protected Route
 */
router.get("/", protect, getUsers);

/**
 * User Routes
 */
router.route("/:id")

    .get(protect, getUserById)

    .put(
        protect,
        authorizeRoles("admin"),
        updateUser
    )

    .delete(
        protect,
        authorizeRoles("admin"),
        deleteUser
    );

module.exports = router;
