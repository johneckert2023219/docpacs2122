const csv = require('csv-to-json');
const fastcsv = require("fast-csv");
const fs = require("fs");
let csvToJson = require('convert-csv-to-json');

function conversion(inputfile, outputfile) {
  let input = inputfile;
  let output = outputfile;
  csvToJson.generateJsonFileFromCsv(input,output);
  console.log('wrote to file')
}

conversion('Events.csv', 'Events.json')
conversion('Goals.csv', 'Goals.json')
conversion('ID.csv', 'ID.json')
conversion('RD.csv', 'RD.json')
conversion('Changes.csv', 'Changes.json')
