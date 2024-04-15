// Init and import controllers
const express = require('express');
const {getTrasitRoutes} = require('../controllers/transitRoutes')
const router = express.Router();
const db = require('../db/db.json');



// GET all routes
router.route('/').get(getTrasitRoutes)

// GET routes by ID
router.get('/:id', (req, res) => res.send(`hello by id: ${req.params.id}`))



// Admin only paths - eventually

router.post('/');

router.put('/');

router.delete('/')

module.exports = router