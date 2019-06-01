const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String, 
    email: String,
    bio: String,
    image: String,
    films: [
      {
        type: Schema.Types.ObjectId,
        ref: "Film"
      }
    ]
  })

module.exports = mongoose.model('User', User)