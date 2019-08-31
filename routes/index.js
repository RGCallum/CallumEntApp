const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const invoicesController = require('../controllers/invoicesController')
const allClientController = require('../controllers/allClientController')
var passport = require('passport');


router.get('/api/employees', employeeController.index)
router.post('/api/employees', employeeController.create)
router.get('/api/employees/:employeeId', employeeController.show)
router.patch('/api/employees/:employeeId', employeeController.update)
router.delete('/api/employees/:employeeId', employeeController.delete)
// router.patch('/api/employees/:employeeId/profile', employeeController.update)

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

router.get('/api/employees/:employeeId/invoices/:invoiceId', invoicesController.index)
router.get('/api/employees/:employeeId/invoices/:invoiceId', invoicesController.show)
router.delete('/api/invoices/:invoiceId', invoicesController.delete)
router.patch('/api/invoices/:invoiceId', invoicesController.update)
router.post('/api/employees/:employeeId/invoices', invoicesController.create)

// router.get('/api/invoices/:invoiceId', allClientController.index)
// router.get('/api/invoices/:invoiceId', allClientController.show)
// router.delete('/api/allClients/:allClientId', allClientController.delete)
// router.patch('/api/allClients/:allClientId', allClientController.update)
// router.post('/api/invoices/:invoiceId/allClientId', allClientController.create)


module.exports = router