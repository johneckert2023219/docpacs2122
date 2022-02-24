// Adding the Requirements
const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');
const port = 2486;


app.use(express.urlencoded({
  extended: false
}));
app.set('view engine', 'ejs')

data = JSON.parse(data)
app.get('/', (req,res) => {
  res.render('orders');
});


app.listen(port)
