import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  users : [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
  ]
});

const Project = mongoose.model("project", projectSchema);

export default Project;