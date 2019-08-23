const Invoice = require('../models/Invoice')
const AllClient = require('../models/AllClient')

const allClientController = {
    index: (req, res) => {
        var invoiceId = req.params.invoiceId
        Invoice.findById(invoiceId).populate('allClients')
            .then((invoice) => {
                res.send(invoice.allClients)
            })
    },
    show: (req, res) => {
        var allClientId = req.params.allClientId
        AllClient.findById(allClientId)
            .then((allClient) => {
                res.send(allClient)
            })
    },
    delete: (req, res) => {
        var allClientId = req.params.allClientId
        AllClient.findByIdAndDelete(allClientId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var allClientId = req.params.allClientId
        AllClient.findByIdAndUpdate(allClientId, req.body, { new: true })
            .then((updatedInvoice) => {
                updatedInvoice.save()
                res.send(updatedInvoice)
            })
    },
    create: (req, res) => {
        var invoiceId = req.params.invoiceId
        Invoice.findById(invoiceId)
            .then((invoice) => {
                console.log(invoice)
                AllClient.create(req.body)
                    .then((newInvoice) => {
                        console.log(newInvoice)
                        invoice.allClients.push(newInvoice)
                        invoice.save()
                        res.send(newInvoice)
                    })
            })
    }

}

module.exports = allClientController