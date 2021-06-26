let appbar=document.querySelector(".app-bar");
let mainContainer=document.querySelector('.main-container');


mainContainer.addEventListener("scroll",function(e){
   let top=e.target.scrollTop;
  appbar.style.top=top+"px";


});

