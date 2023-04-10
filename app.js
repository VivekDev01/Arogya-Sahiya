const express=require("express");
const ejs=require("ejs");
const app=express();
var $ = require('jquery')

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {title:"HOME"});
});

app.get("/login", function(req, res){
    res.render("login", {title: "Login Page"});
});

app.get("/services", function(req, res){
    res.render("services", {title: "Service Information"});
});

app.get("/about", function(req, res){
    res.render("about", {title: "About Us"});
});

app.get("/contact", function(req, res){
    res.render("contact", {title: "Contact Us"});
});

// listen on a port

app.listen(3000, function(req, res){
    console.log("app is running at port 3000");
});