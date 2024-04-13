const express = require('express');
const router = express.Router();

// GET all routes
router.get('/', (req, res) => res.send('this is where Transit Routes info will go'));

// GET routes by ID
router.get('/:id', (req, res) => res.send(`Transit routes by ID:${req.params.id}`));



// Admin only paths

router.post('/');

router.put('/');

router.delete('/')

module.exports = router