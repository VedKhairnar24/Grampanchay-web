import Staff from "../models/Staff.model.js";

export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find().sort({ createdAt: -1 });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: "Error fetching staff", error: error.message });
  }
};

export const createStaff = async (req, res) => {
  try {
    const { name, position, contact, email } = req.body;
    
    if (!name || !position || !contact) {
      return res.status(400).json({ message: "Name, position, and contact are required" });
    }

    const staff = await Staff.create({ name, position, contact, email: email || "" });
    res.status(201).json(staff);
  } catch (error) {
    res.status(500).json({ message: "Error creating staff", error: error.message });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, contact, email } = req.body;

    const staff = await Staff.findByIdAndUpdate(
      id,
      { name, position, contact, email: email || "" },
      { new: true, runValidators: true }
    );

    if (!staff) {
      return res.status(404).json({ message: "Staff member not found" });
    }

    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: "Error updating staff", error: error.message });
  }
};

export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params;

    const staff = await Staff.findByIdAndDelete(id);

    if (!staff) {
      return res.status(404).json({ message: "Staff member not found" });
    }

    res.json({ message: "Staff member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting staff", error: error.message });
  }
};

