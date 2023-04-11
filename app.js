const express=require("express");
const ejs=require("ejs");
const app=express();
var $ = require('jquery')
const bodyParser=require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// home
app.get("/", function(req, res){
    res.render("home", {title:"HOME"});
});

// login
app.route("/login")
.get(function(req, res){
    res.render("login", {title: "Login Page"});
})
.post(function(req, res){
    var userName=req.body.username;
    var password=req.body.password;
    if(userName==="admin" && password==="12345"){
        res.redirect("/");
    }
    else{
        res.render("incorrect-credentials", {title:"incorrect-credentials" });
    }
});

// services
app.route("/add-patient")
.get(function(req, res){
    res.render("add-patient", {title: "Add a Patient"});
})
.post(function(req, res){
    res.console("hey");
});

app.route("/get-patient")
.get(function(req, res){
    res.render("get-patient", {title: "Patient Details"});
})
.post(function(req, res){

});

app.route("/doctors-availability")
.get(function(req, res){
    res.render("doctors-availability", {title: "Check Availability of Doctors"});
})
.post(function(req, res){

});

app.get("/documentation", function(req, res){
    res.render("documentation", {title: "Documentation"});
});

app.get("/contact", function(req, res){
    res.render("contact", {title: "Contact Us"});
});

// listen on a port

app.listen(3000, function(req, res){
    console.log("app is running at port 3000");
});