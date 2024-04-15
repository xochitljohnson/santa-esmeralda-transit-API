// Init and import controllers
const express = require('express');
const { getAllTransitRoutes, getTransitRoute, updateTransitRoute, addTransitRoute, deleteTransitRoute } = require('../controllers/transitRoutes')
const router = express.Router();


// GET all routes, ADD a route
router.route('/').get(getAllTransitRoutes).post(addTransitRoute);

// By ID
router.route('/:id').get(getTransitRoute).put(updateTransitRoute).delete(deleteTransitRoute)


module.exports = router