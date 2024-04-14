const express = require('express');
const router = express.Router();
const db = require('../db/db.json');



// GET all routes
router.get('/', (req, res) => {
   res.json(db)
    
});

// GET routes by ID
router.get('/:id', (req, res) => res.send(`hello by id: ${req.params.id}`))



// Admin only paths - eventually

router.post('/');

router.put('/');

router.delete('/')

module.exports = router