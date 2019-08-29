const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Employee = new Schema({
  index: Number,
  employeename: String,
  idnumber: String, 
  email: String,
  phone: String,
  invoices: [
    {
      type: Schema.Types.ObjectId,
      ref: "Invoice"
    }
  ]
})

module.exports = mongoose.model('Employee', Employee)