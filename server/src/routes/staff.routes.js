import express from "express";
import {
  getStaff,
  createStaff,
  updateStaff,
  deleteStaff
} from "../controllers/staff.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// All staff routes require admin authentication
router.get("/", authenticate, authorize("admin"), getStaff);
router.post("/", authenticate, authorize("admin"), createStaff);
router.put("/:id", authenticate, authorize("admin"), updateStaff);
router.delete("/:id", authenticate, authorize("admin"), deleteStaff);

export default router;
