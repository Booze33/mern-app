import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = expres.Router();

/** READ */
router.get("/:id", verifyToken, getUser);
router.egt("/:id/friends", verifyToken, getUserFriends);

/** UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
