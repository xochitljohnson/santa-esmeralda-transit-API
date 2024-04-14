const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
    name: String,
    description: String,
    // might turn into subdocument later https://mongoosejs.com/docs/subdocs.html
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    }
});

const StopSchema = mongoose.model('Stop', stopSchema);

module.export = StopSchema