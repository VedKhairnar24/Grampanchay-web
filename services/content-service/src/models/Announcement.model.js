import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: String,
    content: String
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", announcementSchema);
