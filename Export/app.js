//Converter Declarations
const fs = require("fs");
const csv = require('csvtojson');
const csvFilePath='Changes.csv'

//Server Declarations
const http = require('http');
const PORT = 5000;
const ejs = require('ejs');
const express = require('express');
const app = express();
const msql = require("mysql")



let files = ['Changes.csv', 'Events.csv', 'Goals.csv', 'ID.csv', 'RD.csv']
let allData = {}

files.forEach((file, i) => {
  csv()
  .fromFile(file)
  .then((jsonObj)=>{
    // console.log(jsonObj);
    console.log(file);
    console.log(file.split('.'));
    console.log(file.split('.')[0]);

    allData[file.split('.')[0]] = jsonObj;
  })
});

console.log(allData);
app.set('view engine' , 'ejs');
app.get('/', (req,res) =>{
  res.render('home', {
    bodytext: "Yurrr"
  })
})
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
