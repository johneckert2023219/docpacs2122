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



app.get('/', (req,res) => {
  res.render('orders');
});
app.get('/neworder', (req,res) => {
  res.render('neworder');
});
app.get('/additem', (req,res) => {
  res.render('additem');
});
app.get('/view', (req,res) => {
  res.render('view');
});

app.listen(port)
console.log(port);
