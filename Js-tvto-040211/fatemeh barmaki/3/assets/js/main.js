let username = document.getElementById("username");
let password = document.getElementById("password");
let lbtn = document.querySelector(".lbtn");
let cbtn = document.querySelector(".cbtn");
let matn = document.querySelector(".matn");

lbtn.addEventListener("click", () => {
  if (isNaN(username.value) == false) {
    matn.style.visibility = "visible";
    matn.innerHTML = "matn";
  }
  setTimeout(() => {
    matn.style.visibility = "hidden";
  }, 3000);
});

lbtn.addEventListener("click", () => {
  if (isNaN(password.value) == false) {
    matn.style.visibility = "visible";
    matn.innerHTML = "matn";
  }
  setTimeout(() => {
    matn.style.visibility = "hidden";
  }, 3000);
});
