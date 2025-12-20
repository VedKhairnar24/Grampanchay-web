import express from "express";

const router = express.Router();

// Staff routes can be added here in the future
router.get("/health", (req, res) => res.json({ status: "ok", service: "staff" }));

export default router;

