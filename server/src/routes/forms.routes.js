import express from "express";
import {
  submitDisabledForm,
  getDisabledForms,
  updateDisabledForm,
  deleteDisabledForm
} from "../controllers/forms.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// Public route - anyone can submit a form
router.post("/disabled", submitDisabledForm);

// Admin routes - require authentication
router.get("/disabled", authenticate, authorize("admin"), getDisabledForms);
router.put("/disabled/:id", authenticate, authorize("admin"), updateDisabledForm);
router.delete("/disabled/:id", authenticate, authorize("admin"), deleteDisabledForm);

export default router;

