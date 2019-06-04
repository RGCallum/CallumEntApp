const Invoice = require('../models/Invoice')
const Info = require('../models/Info')

const infoController = {
    index: (req, res) => {
        var invoiceId = req.params.invoiceId
        Invoice.findById(invoiceId).populate('infos')
            .then((invoice) => {
                res.send(invoice.infos)
            })
    },
    show: (req, res) => {
        var infoId = req.params.infoId
        Info.findById(infoId)
            .then((info) => {
                res.send(info)
            })
    },
    delete: (req, res) => {
        var infoId = req.params.infoId
        Info.findByIdAndDelete(infoId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var infoId = req.params.infoId
        Info.findByIdAndUpdate(infoId, req.body, { new: true })
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
                Info.create(req.body)
                    .then((newInvoice) => {
                        console.log(newInvoice)
                        invoice.infos.push(newInvoice)
                        invoice.save()
                        res.send(newInvoice)
                    })
            })
    }

}

module.exports = infoController