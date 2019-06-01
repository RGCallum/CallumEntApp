const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Film = new Schema({
    name: String,
    image: String,
    link: String,
    synopsis: String,
    role: String,
    type: String,
    year: Number,
    location: String,
    awards: String
})

module.exports = mongoose.model('Film', Film)

