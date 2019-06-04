const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Employee = new Schema({
    employeename: String,
    password: String, 
    email: String,
    bio: String,
    image: String,
    invoices: [
      {
        type: Schema.Types.ObjectId,
        ref: "Invoice"
      }
    ]
  })

module.exports = mongoose.model('Employee', Employee)