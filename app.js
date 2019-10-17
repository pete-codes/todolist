//jshint esversion:6



const express = require("express");

const bodyParser = require("body-parser");



const app = express();
var items = [];
// var idea="";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res){

  // if ("day" === 0 || 6) {
  //   res.write("this is a weekend");
  // }
  //
  // else {
  //   res.write("this is a weekday");
  // }


var today = new Date();
var options = {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
};

var day= today.toLocaleDateString("en-GB", options);


// var currentDay = today.getDay();





//   switch (currentDay){
//
//   case 0: day= "Sunday";
//
// break;
//
//   case 1: day="Monday";
//
// break;
//     case 2:day="Tuesday";
//
// break;
//     case  3: day="Wednesday";
//
// break;
//   case  4:day="Thursday";
//
// break;
//     case  5: day="Friday";
//
// break;
//     case  6: day="Saturday";
//
//       }

res.render("list", {kindOfDay:day, newListItem:items});
});

app.post("/", function (req,res){
   var item = req.body.newItem;
   items.push(item);
// });

res.redirect("/");
// res.ren  der("list", {newListItem:item});
 });



app.listen(3000, function(){

  console.log("Server started on port 3000.");

});
