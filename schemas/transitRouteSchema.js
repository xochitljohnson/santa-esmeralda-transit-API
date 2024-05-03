const mongoose = require('mongoose');
const stopSchema = require('./stopSchema');

const transitRouteSchema = new mongoose.Schema({
  
    name: String,
    description: String,
   

})

const TransitRouteSchema = mongoose.model('TransitRouteSchema', transitRouteSchema)

module.exports = TransitRouteSchema
