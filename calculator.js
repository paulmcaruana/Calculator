//jshint esversion:6
const express = require('express');
const calculator = express();
const bodyParser = require('body-parser');

calculator.use(bodyParser.urlencoded({ extended: false }));

calculator.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

calculator.post("/",function(req, res) {
var numOne = parseInt(req.body.numOne);
var numTwo = parseInt(req.body.numTwo);

var result = numOne +numTwo;

res.send("The result of your calculation is " + result);
});

calculator.listen(3000);
