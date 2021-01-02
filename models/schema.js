const mongoose = require('mongoose');

const CraneSchema = new mongoose.Schema({
    message: String,
    country: String, // This is the standard country code
    backgroundColor: String, //Colour code
    creationTime: String,
    author: String //Datetime string
})

const Crane = mongoose.model('Crane', CraneSchema)

module.exports = { Crane }