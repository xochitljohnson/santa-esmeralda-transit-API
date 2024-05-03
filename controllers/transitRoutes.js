const TransitRouteSchema = require('../schemas/transitRouteSchema')

// @desc Get all transit routes
// @route GET /api/v1/transit-routes
// @access Public
exports.getAllTransitRoutes = async (req, res, next) => {
  try {
    const transitRoutes = await TransitRouteSchema.find(req.body)
    res.status(200).json({data: transitRoutes})
  } catch (error) {
    res.status(400)
  }
}

// @desc Get single transit route by ID
// @route GET /api/v1/transit-routes/:id
// @access Public - for now
exports.getTransitRoute = async (req, res, next) => {
    try {
        const transitRoute = await TransitRouteSchema.findById(req.params.id)
        res.status(200).json({success:true, data: transitRoute})
    } catch (error) {
        res.status(400)
    }
}

// @desc Add a transit routes
// @route POST /api/v1/transit-routes/
// @access Admin
exports.addTransitRoute = async (req, res, next) => {
    try {
        const addRoute = await TransitRouteSchema.create(req.body)
        res.status(201).json({success:true, data: addRoute})
    } catch (error) {
        res.status(400)
    }
}

// @desc Update transit route
// @route PUT /api/v1/transit-routes/:id
// @access Admin
exports.updateTransitRoute = async (req, res, next) => {
   try {
    const updateRoute = await TransitRouteSchema.findByIdAndUpdate(req.params.id, {data:req.body})
    res.status(200).json({data:updateRoute})
   } catch (error) {
    res.status(400)
   }
}

// @desc Delete transit routes
// @route DELETE /api/v1/routes/:id
// @access Admin
exports.deleteTransitRoute = async (req, res, next) => {
   try {
    const deleteRoute = await TransitRouteSchema.findByIdAndDelete(req.params.id)
    res.status(200).json({success:true, data: deleteRoute})
   } catch (error) {
    res.status(400)
   }
}