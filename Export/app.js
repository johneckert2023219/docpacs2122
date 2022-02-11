const fs = require("fs");
const csv = require('csvtojson');
const csvFilePath='Changes.csv'


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


// let data = JSON.stringify(csvFilePath, null, 2);
//
// fs.writeFile(csvFilePath.split('.')[0]+'.json', data, (err) => {
//   if (err) throw err;
//   console.log('Data written to file');
// });
