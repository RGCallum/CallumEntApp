const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const invoicesController = require('../controllers/invoicesController')
const infoController = require('../controllers/infoController')
var passport = require('passport');


router.get('/api/employees', employeeController.index)
router.post('/api/employees', employeeController.create)
router.get('/api/employees/:employeeId/', employeeController.show)
router.patch('/api/employees/:employeeId/', employeeController.update)
router.delete('/api/employees/:employeeId/', employeeController.delete)

/* GET Google Authentication API. */
router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/", session: false }),
    function(req, res) {
        var token = req.user.token;
        res.redirect("http://localhost:3000?token=" + token);
    }
);

router.get('/api/employees/:employeeId/invoiceId', invoicesController.index)
router.get('/api/employees/invoices/:invoiceId', invoicesController.show)
router.delete('/api/invoices/:invoiceId', invoicesController.delete)
router.patch('/api/invoices/:invoiceId', invoicesController.update)
router.post('/api/employees/:employeeId/invoices', invoicesController.create)

router.get('/api/invoices/:invoiceId', infoController.index)
router.get('/api/invoices/:invoiceId', infoController.show)
router.delete('/api/infos/:infoId', infoController.delete)
router.patch('/api/infos/:infoId', infoController.update)
router.post('/api/invoices/:invoiceId/infoId', infoController.create)

module.exports = router