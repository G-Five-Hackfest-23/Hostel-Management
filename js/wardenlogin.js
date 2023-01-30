var svg=document.querySelector("svg");

var bodyofloader=document.querySelector(".bodyofloader");
var container=document.querySelector(".container");

svg.addEventListener("click",function(){
    container.classList.add("hide");
    bodyofloader.classList.remove("hide");
    setTimeout(function(){
        self.close();
        window.open("/html/index.html");
    },500);
})