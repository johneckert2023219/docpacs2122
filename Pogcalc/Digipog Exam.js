const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

studentData = fs.readFileSync('dorta.json')

class Student {
  constructor(name, sequence) {
    this.name = name;
    this.id = sequence;
    this.balance = 0;
  }
}

app.get('/view', (req,res) => {
  let studentID = req.query.id;
  if (studentID == 'undefined') {
    res.render(studentIDList);
  } else {
    foundID = Student.find(element => element == student.query.id);
    if (foundID !== 'undefined') {
      res.render(studentPage);
    } else {
      res.render(errorPage);
    };
  };
});

app.post('/edit', (req, res) => {
  if (req.body.id && req.body.change && req.body.action == true) {
    Student.find(element => element == studentID);
    if (req.body.action == 'add') {
      student.balance + change;
    };
  } else if (req.body.action == 'subtract') {
    student.balance - change;
  } else {
    res.render(errorPage);
  }
});

app.get('/newStudent', (req, res) => {
  res.render(newStudent);
});

app.post('/new', (req, res) => {
  if (req.body.name == true) {
    studentData.push(new Student('Jeremiah', studentData.sequence++));
    goodData = JSON.stringify(studentData);
    fs.writeFile('dorta.json', goodData, (err) => {
      if (err) {
        throw err;
      };
    });
  } else {
    res.render(errorPage);
  };
});

app.listen(port, () => {
  console.log('listening');
});
