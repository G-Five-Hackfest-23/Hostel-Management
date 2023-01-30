var student=document.querySelector("#student");
var bodyofloader=document.querySelector(".bodyofloader");
var container=document.querySelector(".container");

console.log(student);
student.addEventListener("click",function(){
    console.log(student);
    
    bodyofloader.classList.remove("hide");
    container.classList.add("hide");
    // document.body.style.background="none";/
    setTimeout(function(){ 
        self.close();
        window.open("/studentlogin.html");
    },500);
 
    
});

var messworker=document.querySelector("#messworker")
messworker.addEventListener("click",function()
{
    console.log(student);
    
    bodyofloader.classList.remove("hide");
    container.classList.add("hide");
    // document.body.style.background="none";
    setTimeout(function(){

        self.close();
        window.open("/messlogin.html");
    },500);
})
var warden=document.querySelector("#warden");
warden.addEventListener("click",function(){
    console.log(student);
    
    bodyofloader.classList.remove("hide");
    container.classList.add("hide");
    // document.body.style.background="none";
    setTimeout(function(){

        self.close();
        window.open("/wardenlogin.html");
    },500);
})

