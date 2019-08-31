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
    uploadImage: 'String',
    rate: Number,
    result2: String,
    client2: String,
    frequency2: Number,
    rate2: Number,
    subtotal: Number,
    arisefee: Number,
    callumfee: Number,
    namefee: String,
    otherfee: String,
    comments: String,
    totaldue: Number,
    math: Number,
    sub1: Number,
    sub2: Number,
    showSubs: 'Number',
    callumfeeResults: 'Number',
    showTotalCalc: 'Number',
    viewSubs: 'Number',
    total: 'Number',
    
    allClients: [
        {
          type: Schema.Types.ObjectId,
          ref: "AllClient"
        }
      ]
})

module.exports = mongoose.model('Invoice', Invoice)

