import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    fullName: String,
    address: String,
    disabilityType: String,
    contactNumber: String,
    status: { type: String, default: "Pending" }
  },
  { timestamps: true }
);

export default mongoose.model("DisabledRegistration", schema);
