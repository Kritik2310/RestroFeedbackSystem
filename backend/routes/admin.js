const express = require("express");
const router = express.Router();
const Feedback = require('../models/Feedback');

//GET RATING SUMMARY (GOOD VS BAD)
router.get('/ratings-summary', async(req,res) => {
    try {
        const good = await Feedback.countDocuments({ rating: {$gte:4}});
        const bad = await Feedback.countDocuments({rating: {$gte:3}});

        res.json({good,bad});
    } catch(err){
        console.error('admin error:',err);
        res.status(500).json({error:'server error'});
    }
});

module.exports = router;