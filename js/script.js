document.addEventListener("DOMContentLoaded",function(){for(var e,t=((e=function(e){this._element=e;for(var t="",n=0;n<6;n++)t+="<span>&nbsp;</span>";this._element.innerHTML=t,this._slots=this._element.getElementsByTagName("span"),this._tick()}).prototype={_tick:function(){var e=new Date;this._update(this._pad(e.getHours())+this._pad(e.getMinutes())+this._pad(e.getSeconds()));var t=this;setTimeout(function(){t._tick()},1e3)},_pad:function(e){return("0"+e).slice(-2)},_update:function(e){for(var t,n,i,a=0,o=this._slots.length;a<o;a++){if(t=e.charAt(a),!(i=(n=this._slots[a]).dataset.now)){n.dataset.now=t,n.dataset.old=t;continue}i!==t&&this._flip(n,t)}},_flip:function(e,t){e.classList.remove("flip"),e.dataset.old=e.dataset.now,e.dataset.now=t,e.offsetLeft,e.classList.add("flip")}},e),n=0,i=document.querySelectorAll(".clock"),a=i.length;n<a;n++)new t(i[n]);let o=new Date,r=o.getHours(),s=o.getDay(),l=["sun","mon","tue","wed","thu","fri","sat"][s],d=o.getMonth()+1,c=o.getDate(),p;p=r>=6&&r<=11?"morning":r>=12&&r<=16?"afternoon":r>=17&&r<=20?"evening":"night",document.querySelector("#day").innerHTML=l,document.querySelector("#month").innerHTML=d,document.querySelector("#num-date").innerHTML=c,document.querySelector("#timeframe").innerHTML=p}),document.querySelector(".zomato").addEventListener("click",()=>window.open("https://www.zomato.com/unified-support/login","_blank")),document.querySelector(".blinkit").addEventListener("click",()=>window.open("https://lifeline.blinkit.com/login/?redirect_url=%2Flifeline","_blank")),document.querySelector(".v5").addEventListener("click",()=>window.open("https://docs.google.com/spreadsheets/d/17Jy_2BKzrNuZrLLOyOxH7iXppQBIYXGYLnpcLMY6k4M/edit#gid=410694033","_blank")),document.querySelector(".payment").addEventListener("click",()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSeAprJ2nqNaO7wYWwH6rSnDCAlo2QXOYsg9ypWaEkt5hr3RxA/viewform?pli=1","_blank")),document.querySelector(".rediff").addEventListener("click",()=>window.open("https://webmail.rediffmailpro.com/ajaxprism/container?els=24f9056aa0dbd7db89926b0b88c2e0ad&angular=1&els=24f9056aa0dbd7db89926b0b88c2e0ad&ols=2a676b7f32468b8a43aeebc368e0dd0b#folder/Inbox","_blank")),document.querySelector(".cans").addEventListener("click",()=>window.open("https://amaaeltyrneamitore.github.io/Cans/","_blank"));
