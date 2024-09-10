import express from "express";
import { updateUser,deleteUser,getUser } from "../controllers/userController.js";
const router = express.Router();

//TODO:
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id",deleteUser);
//GET
router.get("/:id",getUser);
//GET ALL

export default router;
