// document.querySelector("#mon").addEventListener("click",target);
// function target(){
//    document.querySelector(".card").classList().add("hide");
// };
// var mon=document.querySelectorAll(".cards")[1].querySelector("#mon");
// console.log(mon);
// mon.onclick=function(){
//    console.log(mon.classList.add("hide"));
// };
var cardday=document.querySelectorAll(".card-day");
var mon=document.querySelector("#mon");
var tue=document.querySelector("#tue");
var wed=document.querySelector("#wed");
var thu=document.querySelector("#thu");
var fri=document.querySelector("#fri");
var sat=document.querySelector("#sat");
var sun=document.querySelector("#sun");
console.log(mon);
console.log(cardday);
function hide(){
   mon.classList.add("hide");
   tue.classList.add("hide");
   wed.classList.add("hide");
   thu.classList.add("hide");
   fri.classList.add("hide");
   sat.classList.add("hide");
   sun.classList.add("hide");
   document.querySelector("."+(this.textContent)).classList.remove("hide");
}
for(var i=0;i<cardday.length;i++)
{
   cardday[i].addEventListener("click",hide);
};

var day=document.querySelectorAll(".day");
console.log(day);
function show()
{
   this.classList.add("hide");
   mon.classList.remove("hide");
   tue.classList.remove("hide");
   wed.classList.remove("hide");
   thu.classList.remove("hide");
   fri.classList.remove("hide");
   sat.classList.remove("hide");
   sun.classList.remove("hide");
   
};
for(var i=0;i<day.length;i++)
{
   day[i].addEventListener("click",show);
};
var allocation=document.querySelector(".all");
var selectbutton=document.querySelector(".selectbutton");
var selectroom=document.querySelector(".selectroom");
allocation.addEventListener("click",function(){
   selectbutton.classList.add("hide");
   selectroom.classList.remove("hide");
});
var deallocation=document.querySelector(".deall");
var choice1=document.querySelector(".confirmcancel");
var confirm1=document.querySelector(".confirm1");
var cancel1=document.querySelector(".cancel1");
deallocation.addEventListener("click",function(){

   selectbutton.classList.add("hide");
   choice1.classList.remove("hide");
   confirm1.addEventListener("click",function(){
      choice1.classList.add("hide");
      deallpage.classList.remove("hide");
      setTimeout(function(){
         deallpage.classList.add("hide");
         selectbutton.classList.remove("hide");
      },3000);
   });
   cancel1.addEventListener("click",function(){
      choice1.classList.add("hide");
      selectbutton.classList.remove("hide");
   });
});
var cardroom=document.querySelectorAll(".card-room");
var aftertext=document.querySelector(".aftertext");

var choice=document.querySelector(".confirm-cancel");
var confirm=document.querySelector(".confirm");
var cancel=document.querySelector(".cancel");
var roomno=document.querySelector("#roomno");
var deallpage=document.querySelector(".deallocation");
var cancel2=document.querySelector(".cancel2");
cancel2.addEventListener("click",function(){
   selectroom.classList.add("hide");
   selectbutton.classList.remove("hide");
});
for(var i=0;i<cardroom.length;i++)
{
   cardroom[i].addEventListener("click",function(){
      console.log(n=this.innerHTML);
      selectroom.classList.add("hide");
      choice.classList.remove("hide");
      confirm.addEventListener("click",function(){
         
         choice.classList.add("hide");
         console.log(roomno.innerHTML=n+" ");
         aftertext.classList.remove("hide");
         setTimeout(waiting
         ,3000);
         
      });
      cancel.addEventListener("click",function(){
         choice.classList.add("hide");
         selectroom.classList.remove("hide");
      });
      
   });
};
function waiting()
{
   choice.classList.add("hide");
   aftertext.classList.add("hide");
   selectbutton.classList.remove("hide");
};
var deallocation=document.querySelector(".deall");
// check room no from server using login details

// Dark mode
var light=document.querySelector(".light");
var dark=document.querySelector(".dark");
console.log(light);
console.log(dark)


var header=document.querySelector("header"); 
   var footer=document.querySelector("footer");
   var container1=document.querySelector(".container1");
   var container2=document.querySelector(".container2");
   var part1=document.querySelector("part1");
   var container4=document.querySelector(".container4");
   
light.addEventListener("click",function(){
   console.log(light.classList.add("hide"));
   dark.classList.remove("hide");
   light.classList.add("hide");
   
     header.style.background="white";
     header.style.color="black";
     
     footer.classList.add("lightfooter");
     footer.classList.remove("darkfooter");
     for (let i = 0; i < footera.length; i++) {
      footera[i].classList.add("lightfa");
      footera[i].classList.remove("darkfa");
      
      
     }
     for (let i = 0; i < document.querySelectorAll("a").length; i++) {
      document.querySelectorAll("a")[i].classList.remove("darka");
      document.querySelectorAll("a")[i].classList.add("lighta");
     }
     for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("btn2");
    }
      container1.style.background="linear-gradient(45deg, rgb(0, 223, 211), rgb(4, 92, 104))";
      container2.style.background="none";
      container4.style.background="linear-gradient(45deg,rgb(0,223,211),rgb(3,69,78))";
      reportsection.style.color="black";
});
var footera=document.querySelectorAll(".footera");
var btn=document.querySelectorAll(".btn");
dark.addEventListener("click",function(){
   dark.classList.add("hide");
   light.classList.remove("hide");
   
     header.style.background="rgba(56, 56, 56, 1)";
     header.style.color="gold";
      // header.classList.add("darkheader");
     footer.classList.add("darkfooter");
     footer.classList.remove("lightfooter");
     for (let i = 0; i < footera.length; i++) {
      footera[i].classList.remove("lightfa");
      footera[i].classList.add("darkfa");
      
      
     }
     for (let i = 0; i < document.querySelectorAll("a").length; i++) {
      document.querySelectorAll("a")[i].classList.add("darka");
      document.querySelectorAll("a")[i].classList.remove("lighta");

     }
     for (let i = 0; i < btn.length; i++) {
       btn[i].classList.add("btn2");
     }
     container1.style.background="gray";
     container2.style.background="lightslategray";
     container4.style.background="linear-gradient(45deg,rgb(11,100,96),rgb(2,44,49))";
     reportsection.style.color="paleturquoise";
});


// report button script
var reportbtn=document.querySelector(".reportbtn");
var problems=document.querySelector(".problems");
var reportsection=document.querySelector(".reportsection");
var problem=document.querySelectorAll(".problem");
var cancelled=document.querySelector(".cancelled");
var problemresponse=document.querySelector(".problemresponse");
var probspan=document.querySelector("#prob");
var aftercancel=document.querySelector(".aftercancel")
var problembtn=document.querySelector(".problembtn");
var cancelreqprob=document.querySelector(".cancelreqprob");
reportbtn.addEventListener("click",function(){
   reportsection.classList.add("hide");
   problems.classList.remove("hide");
   cancelled.classList.remove("hide");
   problembtn.onclick=function(){
      cancelled.classList.add("hide");
      reportsection.classList.remove("hide");
      problems.classList.add("hide");
   };
   for (let i = 0; i < problem.length; i++) {
      problem[i].addEventListener("click",solver);
      
   }
});
function solver() {
   cancelled.classList.add("hide");
   problems.classList.add("hide");
   problemresponse.classList.remove("hide");
   
   setTimeout(function(){
      problemresponse.classList.add("hide");
      // cancel.classList.add("hide");
      reportsection.classList.remove("hide");
      
   },3000);
};