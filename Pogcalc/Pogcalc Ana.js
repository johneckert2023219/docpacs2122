const fs = require('fs');

pogChampData = fs.readFileSync('data.json');
let data = JSON.parse(pogChampData);
// Setting empty arrays to store the data from data.json seperately
let pre1990Champs = 0;
let champPogCount = 0;
let champYSW = 0;

let epochTime2022 = Date.parse(new Date());

for (const competitor of data) {
  champYSW += epochTime2022 - Date.parse(competitor.lastWin)
  console.log(champYSW)
  champPogCount += competitor.pogsOwned
  if (true) {
    pre1990Champs++
  }
};
