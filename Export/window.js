const fs = require("fs");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("Changes.csv")
let csvData = [];
let csvStream = fastcsv

// require csvtojson
var csv = require("csvtojson");

// Convert a csv file with csvtojson
csv()
  .fromFile('Users/jeckert/OneDrive - York County School of Technology/Documents/GitHub/docpacs2122/Export/data')
  .then(function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj);
   })

// Parse large csv with stream / pipe (low mem consumption)
csv()
  .fromStream(readableStream)
  .subscribe(function(jsonObj){ //single json object will be emitted for each csv line
     // parse each json asynchronousely
     return new Promise(function(resolve,reject){
         asyncStoreToDb(json,function(){resolve()})
     })
  })

//Use async / await
const jsonArray = csv().fromFile(filePath);

  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // Remove the first line: header
    csvData.shift();
    // Open the connection
    // connect to the mySQL database
    // save csvData
    const mysql = require("mysql");
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "abc",
      database: "testdb"
    });
    // Open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
          "INSERT INTO category ()"
      }
    })
  });
stream.pipe(csvStream);
