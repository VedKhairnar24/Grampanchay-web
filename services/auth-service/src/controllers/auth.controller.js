import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../shared/utils/jwt.js";

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(
    { id: admin._id, role: "admin" },
    process.env.JWT_SECRET
  );

  res.json({ token });
};
