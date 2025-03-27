const express = require('express');
const Prompt = require('../models/Prompt');

const router = express.Router();

// Get all prompts
router.get('/', async (req, res) => {
  try {
    const prompts = await Prompt.find();
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
