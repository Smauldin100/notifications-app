const express = require('express');
const infineteService = require('../services/infineteService');
const router = express.Router();

// POST: Process user input
router.post('/process', async (req, res) => {
    try {
        const { userInput } = req.body;
        if (!userInput) {
            return res.status(400).json({ error: 'User input is required' });
        }

        const response = await infineteService.processInput(userInput);
        res.json({ success: true, response });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong', details: error.message });
    }
});

module.exports = router;
