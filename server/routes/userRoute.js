import express from "express";
import { updateUser,deleteUser } from "../controllers/userController.js";
const router = express.Router();

//TODO:
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id",deleteUser);
//GET
//GET ALL

export default router;
