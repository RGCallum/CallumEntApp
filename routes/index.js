const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const invoicesController = require('../controllers/invoicesController')
const allClientController = require('../controllers/allClientController')
var passport = require('passport');
var nodemailer = require('nodemailer');
const creds = require('../config/config');

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

router.get('/api/employees/:employeeId', invoicesController.index)
router.get('/api/employees/:employeeId/:invoiceId', invoicesController.show)
router.delete('/api/invoices/:invoiceId', invoicesController.delete)
router.patch('/api/invoices/:invoiceId', invoicesController.update)
router.post('/api/employees/:employeeId/invoices', invoicesController.create)


var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }
  
  var transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });
  
  router.post('/api/home', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${content} `
  
    var mail = {
      from: name,
      to: 'sceneitpix@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
// router.get('/api/invoices/:invoiceId', allClientController.index)
// router.get('/api/invoices/:invoiceId', allClientController.show)
// router.delete('/api/allClients/:allClientId', allClientController.delete)
// router.patch('/api/allClients/:allClientId', allClientController.update)
// router.post('/api/invoices/:invoiceId/allClientId', allClientController.create)


module.exports = router