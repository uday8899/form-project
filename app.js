var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyParser = require("body-parser");
var Form = require("./models/form");
        //==========APP CONFIG=========//
app.set("view engine", "ejs");
mongoose.connect("mongodb+srv://uday26:Uday1234@cluster0-8hunn.mongodb.net/test?retryWrites=true");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));


       //==========ROUTES=========//
app.get("/", function(req, res){
   res.render("homepage"); 
});
app.get("/user-form", function(req, res){
   res.render("form"); 
});
app.post("/user-form", function(req, res){
   var name = req.body.name;
   var email = req.body.email;
   var DateOfBirth = req.body.birth;
   var number = req.body.number;
   var newForm = {name : name, email:email, birth : DateOfBirth, number : number};
   Form.create(newForm, function(err, form){
      if(err){
          console.log(err);
      } else{
          res.redirect("/submission");
      }
   });
});
app.get("/submission", function(req, res) {
   res.render("submission"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started!"); 
});