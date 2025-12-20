import Announcement from "../models/Announcement.model.js";

export const getAnnouncements = async (req, res) => {
  const data = await Announcement.find().sort({ createdAt: -1 });
  res.json(data);
};

export const createAnnouncement = async (req, res) => {
  const announcement = await Announcement.create(req.body);
  res.status(201).json(announcement);
};

