import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("Staff", staffSchema);

