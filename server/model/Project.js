import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    unique: true,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  languages: 
    [{ type: String }],
  roles: 
    [{ type: String }]
  });

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
