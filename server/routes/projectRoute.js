import express from "express";
import {createProject
    // ,updateProject,deleteProject,getProject,getProjects
} from "../controllers/projectController.js"
const router = express.Router();

//TODO:
//CREATE
router.post('/:userId',createProject)
//UPDATE
// router.put('/:userId',updateProject)
// //DELETE
// router.delete('/:userId',deleteProject)
// //GET
// router.get('/:userId',getProject)
// //GET ALL
// router.get('/:userId',getProjects)

export default router