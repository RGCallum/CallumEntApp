const Employee = require('../models/Employee')
const Invoice = require('../models/Invoice')

const invoicesController = {
    index: (req, res) => {
        var employeeId = req.params.employeeId
        Employee.findById(req.params.employeeId).populate('invoices')
            .then((employee) => {
                res.send(employee.invoices)
            })
    },
    show: (req, res) => {
        var invoiceId = req.params.invoiceId
        Invoice.findById(invoiceId)
            .then((invoice) => {
                res.send(invoice)
            })
    },
    
    delete: (req, res) => {
        var invoiceId = req.params.invoiceId
        Invoice.findByIdAndDelete(invoiceId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var invoiceId = req.params.invoiceId
        Invoice.findByIdAndUpdate(invoiceId, req.body, { new: true })
            .then((updatedInvoice) => {
                updatedInvoice.save()
                res.send(updatedInvoice)
            })
    },
    create: (req, res) => {
        var employeeId = req.params.employeeId
        Employee.findById(employeeId)
            .then((employee) => {
                console.log(employee)
                Invoice.create(req.body)
                    .then((newInvoice) => {
                        console.log(newInvoice)
                        employee.invoices.push(newInvoice)
                        employee.save()
                        res.send(newInvoice)
                    })
            })
    }

}

module.exports = invoicesController