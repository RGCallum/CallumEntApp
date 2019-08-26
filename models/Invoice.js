const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Invoice = new Schema({
    date: String,
    payperiodstart: String,
    payperiodend: String,
    name: String,
    idnumber: String,
    client: String,
    frequency: Number,
    result: String,
    image: String,
    rate: Number,
    client2: String,
    frequency2: Number,
    rate2: Number,
    subtotal: Number,
    arisefee: Number,
    callumfee: Number,
    namefee: String,
    otherfee: String,
    totaldue: Number,
    allClients: [
        {
          type: Schema.Types.ObjectId,
          ref: "AllClient"
        }
      ]
})

module.exports = mongoose.model('Invoice', Invoice)

