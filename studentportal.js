const express=require("express");
const app=express();
const https=require("https");
const bodyparser=require("body-parser");
app.use(express.static(__dirname+"public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/studentportal.html");

});

var  card = document.querySelectorAll('.card');
var   cards = document.querySelector('.cards');
var   timetable = document.querySelector('.timetable');
var  mon=document.getElementById('mon');
var monday=document.querySelector('monday');
var tue=document.getElementById('tue');
var tuesday=document.querySelector('tuesday');
var wed=document.getElementById('wed');
var wednesday=document.querySelector('wednesday');
var fri=document.getElementById('fri');
var friday=document.querySelector('friday');
var sat=document.getElementById('sat');
var saturday=document.querySelector('saturday');
var sun=document.getElementById('sun');
var sunday=document.querySelector('sunday');
var thu=document.getElementById('thu');
var thursday=document.querySelector('thursday');
   function toggle(){
       cards.classList.add('hide');
       monday.classList.remove('hide');
   }
   
app.listen(5000,function(){
    console.log("Server created at port 5000");
});
