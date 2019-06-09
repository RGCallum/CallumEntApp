require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/index');
const path = require("path");

mongoose.connect(process.env.MONGODB_URI); 


const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}) 

app.use(bodyParser.json());
app.get('/helloworld', (req,res) => {
  res.send('WTF is up world 2019!')
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '/client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
  });
}

app.use('/', routes);



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("We up in here on " + PORT);
})