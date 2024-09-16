import Project from "../model/Project.js";

//TODO:
//CREATE
export const createProject = async (req, res) => {
  const { author, name, description, languages, roles } = req.body;
  const projectExist = await Project.findOne({ name });
  if (projectExist) {
    return res
      .status(409)
      .json({ success: false, message: "Project name already exists" });
  }
  const newProject = await Project.create({
    author: req.params.userId,
    name,
    description,
  });

  res.status(201).json({
    newProject,
  });
};
//UPDATE
//DELETE
//GET
//GET ALL
