const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

studentData = readFileSync('dorta.json')

class Student {
  constructor(name, sequence) {
    this.name = name;
    this.id = sequence;
    this.balance = 0;
  }
}

app.get('/view', (req,res) => {
  let studentID = req.query.id;
  if (studentID !== 'undefined') {
    res.render(studentIDList);
  } else {
    studentID.find(studentreq.query.id);

  };
});

app.post('/edit', (req, res) => {

})

app.get('/newStudent', (req, res) => {
  res.render(newStudent);
})

app.post('/new', (req, res) => {

})




app.listen(port, () => {
  console.log('listening')
});
