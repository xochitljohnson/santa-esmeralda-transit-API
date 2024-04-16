// @desc Get all transit routes
// @route GET /api/v1/transit-routes
// @access Public
exports.getAllTransitRoutes = (req, res, next) => {
    res.status(200).json({success:true, message:"All transit routes"})
}

// @desc Get single transit route by ID
// @route GET /api/v1/transit-routes/:id
// @access Public - for now
exports.getTransitRoute = (req, res, next) => {
    res.status(200).json({success:true, message:"One transit route", route: `${req.params.id}`})
}

// @desc Add a transit routes
// @route POST /api/v1/transit-routes/
// @access Admin
exports.addTransitRoute = (req, res, next) => {
    res.status(201).json({success:true, message:"New resource created",route:`${res.body}`})
}

// @desc Update transit route
// @route PUT /api/v1/transit-routes/:id
// @access Admin
exports.updateTransitRoute = (req, res, next) => {
    res.status(204).json({success:true, message:`Route updated ${req.params.id}`})
}

// @desc Delete transit routes
// @route DELETE /api/v1/routes/:id
// @access Admin
exports.deleteTransitRoute = (req, res, next) => {
   res.send('deleted')
}