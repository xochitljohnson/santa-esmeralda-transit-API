const mongoose = require('mongoose');
const stopSchema = require('./stopSchema');

const transitRouteSchema = new mongoose.Schema({

    name: String,
    description: String,
    stops: [stopSchema]
})

const TransitRouteSchema = mongoose.model('TransitRouteSchema', transitRouteSchema)

module.exports = TransitRouteSchema
