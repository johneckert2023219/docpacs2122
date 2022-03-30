const fs = require('fs');

pogChampData = fs.readFileSync('data.json');
let data = JSON.parse(pogChampData);

let pre1990Champs = 0;
let champPogCount = 0;
let champYSW = 0;
let pogChamps = 0

let epochTime2022 = Date.parse(new Date());

for (const competitor of data) {
  pogChamps++;
  champYSW += (epochTime2022 - Date.parse(competitor.lastWin)) / 1000 / 60 / 60 / 24 / 365;
  if ( Date.parse(competitor.lastWin) < 631152000000) {
    pre1990Champs++
  };
  champPogCount += competitor.pogsOwned;
};

console.log(`The average number of pogs per champion is ${Math.round(champPogCount / pogChamps)}`);
console.log(`The average year since a win between champions is ${Math.round(champYSW / pogChamps)}`);
console.log(`The percent of victories since 2000 would be ${Math.round(((pogChamps - pre1990Champs) / pogChamps) * 100)}`);
