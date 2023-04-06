const express=require("express");
const ejs=require("ejs");
const app=express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    // res.render("header");
    res.sendFile(__dirname+"/templates/index.html");

});

app.listen(3000, function(req, res){
    console.log("app is running at port 3000");
});