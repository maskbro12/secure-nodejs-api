import express from "express";
import { verifyToken } from "../middleware/auth.js";  // JWT middleware
import { checkRole } from "../middleware/role.js";    // Role middleware

const router = express.Router();

// Route only accessible by admins
router.get("/admin", verifyToken, checkRole(["admin"]), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

// Route accessible by users and admins
router.get("/user", verifyToken, checkRole(["user", "admin"]), (req, res) => {
  res.json({ message: "Welcome, User!" });
});

router.get("/admin1", checkRole(["admin"]), (req, res) => {
  res.send("Welcome Admin!");
});


export default router;
