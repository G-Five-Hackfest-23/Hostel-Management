var svg=document.querySelector("svg");
var bodyofloader=document.querySelector(".bodyofloader");
var container=document.querySelector(".container");
svg.addEventListener("click",function(){
    bodyofloader.classList.remove("hide");
    container.classList.add("hide");
    setTimeout(() => {
        self.close();
        window.open("/index.html");
    }, 500);
})