import express from "express";
import { submitDisabledForm } from "../controllers/forms.controller.js";

const router = express.Router();

router.post("/disabled", submitDisabledForm);

export default router;

