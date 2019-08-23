const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const AllClient = new Schema({
    name: String,
    synopsis: String,
    role: String,
    type: String,
    year: Number,
    location: String,
    image: String,
    awards: String
})

module.exports = mongoose.model('AllClient', AllClient)
