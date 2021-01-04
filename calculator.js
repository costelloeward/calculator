const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
// Sending the html file
app.get("/", function(req,res){
res.sendFile(__dirname+"/index.html");
});
// Using the numbers for addition
app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Thanks. The result is "+ result);
});
// Sending the BMI html file
app.get("/bmicalculator", function(req,res){
res.sendFile(__dirname+"/bmiCalculator.html");
});
// Calculating the BMI
app.post("/bmicalculator",function(req,res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmi = Math.round(weight/(height*height));
  res.send("Thanks. Your BMI is "+ bmi);
});
// Sends message server has started in terminal
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
