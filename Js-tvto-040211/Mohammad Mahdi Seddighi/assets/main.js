let h2Elem = document.getElementById("h2tag");
let zaman = new Date();
let option = {
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};
setInterval(() => {
  h2Elem.innerText = zaman.toLocaleString("fa-IR", option);
}, 1000);
//  let img=document.getElementById("img")
 let btn1=document.querySelector("btn1")
 let h1Elem=document.querySelector(".tagh1")
 btn1.addEventListener("click",() => {
h1Elem.innerHTML="hello"
h1Elem.style.color="red"
 })
 let username=document.querySelector("#user")
 let pass=document.querySelector("#pass")
 let btn5=document.querySelector("#btnn")
 btn5.addEventListener("click",function () {
    if (username.value==ali||sara||reza && pass.value=="123"||"456"||"789") {
        location.href="http://127.0.0.1:5500/wel.html"
    }
 })