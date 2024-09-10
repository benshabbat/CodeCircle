import express from "express";
import { updateUser } from "../controllers/userController.js";
const router = express.Router();

//TODO:
router.put("/:id", updateUser);
//UPDATE
//DELETE
//GET
//GET ALL

export default router;
