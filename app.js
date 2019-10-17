//jshint esversion:6



const express = require("express");

const bodyParser = require("body-parser");



const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res){
var today = new Date();
  var currentDay = today.getDay();
var day = "";

  if (currentDay === 5 || currentDay === 0) {
    day= "weekend";
  }

  else {
    day= "weekday";

  }
res.render("list", {kindOfDay:day});
});



app.listen(3000, function(){

  console.log("Server started on port 3000.");

});
