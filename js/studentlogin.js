var svg=document.querySelector("svg");

var bodyofloader=document.querySelector(".bodyofloader");
var container=document.querySelector(".container");

svg.addEventListener("click",function()
{
    container.classList.add("hide");
    bodyofloader.classList.remove("hide");
    setTimeout(function(){

        self.close();
        window.open("/html/index.html");
    },500);
})
var btn=document.querySelector(".btn");
var input=document.querySelectorAll("input");
console.log(input[0].value)
btn.addEventListener("click",function(){
    if(input[0].value==="2022041164" && input[1].value==="8953596712")
    {
        console.log("yes");
        window.close("/html/studentlogin.html");
        window.open("/html/studentportal.html");
    }
    else{
        document.querySelector("#wrong").innerHTML="Wrong Password. Please try again.";
    }
});
var signin=document.querySelector("form");
