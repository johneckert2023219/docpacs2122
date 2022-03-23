const fs = require('fs');

// The needed variables for the class to work
const randNames = ['Zunairah', 'Jabbour', 'Fakira', 'Yassin', 'Hasaan', 'Saladin', 'Hamid', 'Shaker', 'Aretas', 'Ally', 'Jihad', 'Allam', 'Areeqa', 'Kabir', 'Adhara', 'Harron', 'Yarah', 'Odeh', 'Kardal', 'Laham'];
const champData = [];
// Epoch time in milliseconds
const epochTime1990 = 631152000000;
const epochTime2022 = 1647820800000;
// Adding i here because I don't remember how to add it later lol
var i = 0;

// Making a class to calculate a random name, random time since last win, and the number of pogs they own.
class Pogchamp {
  constructor(name, lastWin, pogsOwned) {
     this.name = randNames[Math.floor(Math.random() * randNames.length)] + " " + randNames[Math.floor(Math.random() * randNames.length)];
     this.lastWin = Math.floor(Math.random() * (epochTime2022 - epochTime1990 + 1)) + epochTime1990;
     // Lowest number 1, highest number 100
     this.pogsOwned = Math.floor(Math.random() * 101);
  };
};

while (i < 100) {
  champData.push(new Pogchamp);
  i++;
};

// Making the JSON.stringify a variable to simplify things
const goodData = JSON.stringify(champData);

// Writing the variable to the data.json file
fs.writeFile('data.json', goodData, (err) => {
  // If there is an error, send the error to command prompt.
  if (err) {
    throw err;
  }
  // If there is no error, log this phrase.
  console.log('JSON data saved to file.')
});
