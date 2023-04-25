// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDCU9MrXGzishYwvkX3axpDynipYjyQoX0",
//   authDomain: "arogya-sahiya.firebaseapp.com",
//   projectId: "arogya-sahiya",
//   storageBucket: "arogya-sahiya.appspot.com",
//   messagingSenderId: "78492852806",
//   appId: "1:78492852806:web:1a3902b62b18b29371e047",
//   measurementId: "G-4RX8W9EX85"
// };

// // Initialize Firebase
// const appp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appp);



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

app.get("/suggestions", function(req, res){
    res.render("suggestions", {title:"Suggestions Page"});
});


// listen on a port

app.listen(3000, function(req, res){
    console.log("app is running at port 3000");
});

