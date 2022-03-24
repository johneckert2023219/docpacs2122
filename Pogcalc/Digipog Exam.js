const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
