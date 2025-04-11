import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  appliedDate: String,
  link: String,
});

const Job = mongoose.model("Job", jobSchema);
export default Job;