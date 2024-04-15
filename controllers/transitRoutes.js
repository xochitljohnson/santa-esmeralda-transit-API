// @desc Get all transit routes
// @route GET /api/v1/routes
// @access Public
exports.getTrasitRoutes = (req, res, next) => {
    res.status(200).json({success:true, message:"All transit routes"})
}