const mongoose = require('mongoose');
const stopSchema = require('./stopSchema');

const transitRouteSchema = new mongoose.Schema({
   metadata: {
    created_at: Date.now(),
    created_by: String
   },
    name: String,
    description: String,
    stops: [stopSchema],
    schedule: [...schedule],
    current_location: {
        coords: Object,
        timestamp: Date.now()
    }

})

const TransitRouteSchema = mongoose.model('TransitRouteSchema', transitRouteSchema)

module.exports = TransitRouteSchema
