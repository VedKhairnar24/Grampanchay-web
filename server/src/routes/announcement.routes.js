import express from "express";
import {
  getAnnouncements,
  createAnnouncement
} from "../controllers/announcement.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";
import { validate } from "../middleware/validation.middleware.js";
import { announcementSchema } from "../validation/announcement.schema.js";

const router = express.Router();

router.get("/", getAnnouncements);
router.post(
  "/",
  authenticate,
  authorize("admin"),
  validate(announcementSchema),
  createAnnouncement
);

export default router;

