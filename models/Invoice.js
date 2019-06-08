const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Invoice = new Schema({
    date: Date,
    payperiod: String,
    name: String,
    idnumber: String,
    client: String,
    frequency: Number,
    rate: Number,
    temptotal: Number,
    arisefee: Number,
    callumfee: Number,
    totaldue: Number
})

module.exports = mongoose.model('Invoice', Invoice)

