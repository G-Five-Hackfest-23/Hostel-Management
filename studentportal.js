const express=require("express");
const app=express();
const https=require("https");
const bodyparser=require("body-parser");
app.use(express.static("public"));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/studentportal.html");

});
 
app.listen(5000,function(){
    console.log("Server created at port 5000");
});
