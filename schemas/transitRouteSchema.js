const mongoose = require('mongoose');

const transitRouteSchema = new mongoose.Schema({
    route_id: ObjectId,
    name: String,
    description: String
})