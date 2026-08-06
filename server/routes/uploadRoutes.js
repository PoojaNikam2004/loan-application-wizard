import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

// Test
router.get("/", (req, res) => {
  res.send("Upload Route Working");
});

// Upload
router.post("/", upload.single("document"), (req, res) => {
  res.json({
    success: true,
    filename: req.file.filename,
    path: req.file.path,
  });
});

export default router;